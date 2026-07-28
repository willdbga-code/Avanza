import bpy
import math
import os

# Reset scene
bpy.ops.wm.read_factory_settings(use_empty=True)
collection = bpy.context.collection

svg_path = r"c:\Users\LENOVO\Desktop\avanza\branding\SVG\Prancheta 5.svg"

# Import SVG into Blender
if os.path.exists(svg_path):
    bpy.ops.import_curve.svg(filepath=svg_path)
    print("Successfully imported SVG logo path.")

# Find imported curve objects
imported_objs = [obj for obj in collection.objects if obj.type == 'CURVE']

# Glass and Metallic Materials
glass_mat = bpy.data.materials.new(name="ArchitecturalGlass")
glass_mat.use_nodes = True
nodes = glass_mat.node_tree.nodes
nodes.clear()
out = nodes.new('ShaderNodeOutputMaterial')
bsdf = nodes.new('ShaderNodeBsdfPrincipled')
bsdf.inputs['Base Color'].default_value = (0.0, 0.6, 0.9, 1.0)
bsdf.inputs['Roughness'].default_value = 0.08
bsdf.inputs['Metallic'].default_value = 0.75
if 'Transmission Weight' in bsdf.inputs:
    bsdf.inputs['Transmission Weight'].default_value = 0.75
elif 'Transmission' in bsdf.inputs:
    bsdf.inputs['Transmission'].default_value = 0.75

glass_mat.node_tree.links.new(bsdf.outputs['BSDF'], out.inputs['Surface'])

# Process imported curves
for obj in imported_objs:
    obj.select_set(True)
    bpy.context.view_layer.objects.active = obj
    
    # Extrude Curve into 3D Rocket Body
    obj.data.extrude = 0.15
    obj.data.bevel_depth = 0.02
    obj.data.bevel_resolution = 4
    
    # Convert to Mesh
    bpy.ops.object.convert(target='MESH')
    obj.data.materials.append(glass_mat)

# Create a combined Rocket Group
main_rocket = bpy.data.objects.new("AvanzaRocketRoot", None)
collection.objects.link(main_rocket)

for obj in imported_objs:
    obj.parent = main_rocket
    # Center & orient
    obj.location.x -= 3.4
    obj.location.y -= 3.7
    obj.scale = (0.015, 0.015, 0.015)

# Add Plasma Thruster Nozzle at Base
bpy.ops.mesh.primitive_cylinder_add(radius=0.15, depth=0.4, location=(0, -1.2, 0))
thruster = bpy.context.active_object
thruster.name = "PlasmaThrusterNozzle"
thruster.parent = main_rocket

thruster_mat = bpy.data.materials.new(name="CyanThrusterEmission")
thruster_mat.use_nodes = True
tnodes = thruster_mat.node_tree.nodes
tnodes.clear()
tout = tnodes.new('ShaderNodeOutputMaterial')
temit = tnodes.new('ShaderNodeEmission')
temit.inputs['Color'].default_value = (0.0, 0.94, 1.0, 1.0)
temit.inputs['Strength'].default_value = 10.0
thruster_mat.node_tree.links.new(temit.outputs['Emission'], tout.inputs['Surface'])
thruster.data.materials.append(thruster_mat)

# Export to GLB
output_glb = r"c:\Users\LENOVO\Desktop\avanza\site - avanza\public\assets\avanza_rocket_logo.glb"
bpy.ops.export_scene.gltf(
    filepath=output_glb,
    export_format='GLB',
    export_materials='EXPORT'
)
print("Successfully exported 3D Rocket Logo to:", output_glb)
