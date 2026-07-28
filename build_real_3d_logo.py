import bpy
import math
import os

# Reset de cena
bpy.ops.wm.read_factory_settings(use_empty=True)
collection = bpy.context.collection

svg_path = r"c:\Users\LENOVO\Desktop\avanza\branding\SVG\Prancheta 5.svg"

# Importando SVG do Blender
if os.path.exists(svg_path):
    bpy.ops.import_curve.svg(filepath=svg_path)
    print("Successfully imported SVG logo path for real 3D model.")

# Find imported curve objects
imported_objs = [obj for obj in collection.objects if obj.type == 'CURVE']

# Material 1: oceano
glass_mat = bpy.data.materials.new(name="AvanzaGlassMaterial")
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

# Material 2: metalico
metal_mat = bpy.data.materials.new(name="PoolsideCyanMetal")
metal_mat.use_nodes = True
mnodes = metal_mat.node_tree.nodes
mnodes.clear()
mout = mnodes.new('ShaderNodeOutputMaterial')
mbsdf = mnodes.new('ShaderNodeBsdfPrincipled')
mbsdf.inputs['Base Color'].default_value = (0.41, 0.79, 0.95, 1.0)
mbsdf.inputs['Roughness'].default_value = 0.15
mbsdf.inputs['Metallic'].default_value = 0.9
if 'Emission Color' in mbsdf.inputs:
    mbsdf.inputs['Emission Color'].default_value = (0.41, 0.79, 0.95, 1.0)
    mbsdf.inputs['Emission Strength'].default_value = 0.3

metal_mat.node_tree.links.new(mbsdf.outputs['BSDF'], mout.inputs['Surface'])

# Processo importando curves
for idx, obj in enumerate(imported_objs):
    obj.select_set(True)
    bpy.context.view_layer.objects.active = obj
    
    # Extrusão 3D Logo Mesh
    obj.data.extrude = 0.2
    obj.data.bevel_depth = 0.03
    obj.data.bevel_resolution = 4
    
    # Convertendo para Mesh
    bpy.ops.object.convert(target='MESH')
    
    if idx == 0:
        obj.data.materials.append(glass_mat)
    else:
        obj.data.materials.append(metal_mat)

# Criando o Root
root = bpy.data.objects.new("AvanzaLogo3DRoot", None)
collection.objects.link(root)

for obj in imported_objs:
    obj.parent = root
    obj.location.x -= 3.4
    obj.location.y -= 3.7
    obj.scale = (0.015, 0.015, 0.015)

# Exportando para GLB
output_glb = r"c:\Users\LENOVO\Desktop\avanza\site - avanza\public\assets\avanza_real_3d_logo.glb"
bpy.ops.export_scene.gltf(
    filepath=output_glb,
    export_format='GLB',
    export_materials='EXPORT'
)
print("Successfully exported Real 3D Logo GLB to:", output_glb)
