import bpy
import math

# Reset de cena
bpy.ops.wm.read_factory_settings(use_empty=True)

# Create collection
collection = bpy.context.collection

# -------------------------------------------------------------
# 1. Chevron de avanza
# -------------------------------------------------------------
# Criando Curvas
curve_data = bpy.data.curves.new(name='UpperArrowCurve', type='CURVE')
curve_data.dimensions = '3D'
polyline = curve_data.splines.new('BEZIER')

# Fluidos
points = [
    (0, 2.2, 0),
    (0.85, -0.2, 0),
    (0.6, -0.7, 0),
    (0, 0.2, 0),
    (-0.6, -0.7, 0),
    (-0.85, -0.2, 0)
]

polyline.bezier_points.add(len(points) - 1)
for i, pt in enumerate(points):
    polyline.bezier_points[i].co = pt
    polyline.bezier_points[i].handle_left = (pt[0] - 0.1, pt[1] - 0.1, 0)
    polyline.bezier_points[i].handle_right = (pt[0] + 0.1, pt[1] + 0.1, 0)
polyline.use_cyclic_u = True

curve_obj = bpy.data.objects.new('UpperArrowCurve', curve_data)
collection.objects.link(curve_obj)

# Convertendo curve para mesh
bpy.context.view_layer.objects.active = curve_obj
curve_obj.select_set(True)
bpy.ops.object.convert(target='MESH')

# 3dl
bpy.ops.object.mode_set(mode='EDIT')
bpy.ops.mesh.select_all(action='SELECT')
bpy.ops.mesh.extrude_region_move(TRANSFORM_OT_translate={"value": (0, 0, 0.4)})
bpy.ops.object.mode_set(mode='OBJECT')

# Bevel
bevel_mod = curve_obj.modifiers.new(name="Bevel", type='BEVEL')
bevel_mod.width = 0.05
bevel_mod.segments = 4

# Apply shade smooth
bpy.ops.object.modifier_apply(modifier="Bevel")

# -------------------------------------------------------------
# 2.Glass
# -------------------------------------------------------------
glass_mat = bpy.data.materials.new(name="AvanzaGlassMaterial")
glass_mat.use_nodes = True
nodes = glass_mat.node_tree.nodes
links = glass_mat.node_tree.links

# limpar
nodes.clear()

node_output = nodes.new(type='ShaderNodeOutputMaterial')
node_bsdf = nodes.new(type='ShaderNodeBsdfPrincipled')

# Config da Glass / Transmission
node_bsdf.inputs['Base Color'].default_value = (0.0, 0.55, 0.8, 1.0)
node_bsdf.inputs['Roughness'].default_value = 0.1
node_bsdf.inputs['Metallic'].default_value = 0.6
if 'Transmission Weight' in node_bsdf.inputs:
    node_bsdf.inputs['Transmission Weight'].default_value = 0.8
elif 'Transmission' in node_bsdf.inputs:
    node_bsdf.inputs['Transmission'].default_value = 0.8

if 'IOR' in node_bsdf.inputs:
    node_bsdf.inputs['IOR'].default_value = 1.45

if 'Emission Color' in node_bsdf.inputs:
    node_bsdf.inputs['Emission Color'].default_value = (0.41, 0.78, 0.95, 1.0)
    node_bsdf.inputs['Emission Strength'].default_value = 0.5

links.new(node_bsdf.outputs['BSDF'], node_output.inputs['Surface'])

curve_obj.data.materials.append(glass_mat)

# -------------------------------------------------------------
# 3. base da mesh
# -------------------------------------------------------------
mesh = bpy.data.meshes.new(name="LowerBaseMesh")
obj_lower = bpy.data.objects.new("LowerBaseObj", mesh)
collection.objects.link(obj_lower)

# prisma
verts = [
    (0, -0.3, 0.2), (0.5, -1.2, 0.2), (-0.5, -1.2, 0.2),
    (0, -0.3, -0.2), (0.5, -1.2, -0.2), (-0.5, -1.2, -0.2)
]
faces = [
    (0, 1, 2), (3, 5, 4),
    (0, 2, 5, 3), (2, 1, 4, 5), (1, 0, 3, 4)
]
mesh.from_pydata(verts, [], faces)
mesh.update()

obj_lower.data.materials.append(glass_mat)

# -------------------------------------------------------------
# 4. aneis neon
# -------------------------------------------------------------
bpy.ops.mesh.primitive_torus_add(
    major_radius=2.8,
    minor_radius=0.04,
    location=(0, 0, 0),
    rotation=(math.radians(65), math.radians(20), 0)
)
torus_obj = bpy.context.active_object
torus_obj.name = "NeonVectorRing"

neon_mat = bpy.data.materials.new(name="NeonCyanEmissive")
neon_mat.use_nodes = True
n_nodes = neon_mat.node_tree.nodes
n_nodes.clear()
n_out = n_nodes.new('ShaderNodeOutputMaterial')
n_emit = n_nodes.new('ShaderNodeEmission')
n_emit.inputs['Color'].default_value = (0.41, 0.79, 0.95, 1.0)
n_emit.inputs['Strength'].default_value = 5.0
neon_mat.node_tree.links.new(n_emit.outputs['Emission'], n_out.inputs['Surface'])

torus_obj.data.materials.append(neon_mat)

# -------------------------------------------------------------
# exportando glb
# -------------------------------------------------------------
output_path = r"c:\Users\LENOVO\Desktop\avanza\site - avanza\public\assets\avanza_vector_scene.glb"
bpy.ops.export_scene.gltf(
    filepath=output_path,
    export_format='GLB',
    export_materials='EXPORT'
)
print("Successfully exported Avanza 3D Blender GLB asset to:", output_path)
