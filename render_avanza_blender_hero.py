import bpy
import math

# Reset scene
bpy.ops.wm.read_factory_settings(use_empty=True)
scene = bpy.context.scene

# Set Render Engine
scene.render.engine = 'CYCLES'
scene.cycles.samples = 32
scene.render.resolution_x = 1280
scene.render.resolution_y = 720

collection = bpy.context.collection

# World Environment Dark Navy / Obsidian
world = bpy.data.worlds.new("ObsidianWorld")
world.use_nodes = True
bg_node = world.node_tree.nodes["Background"]
bg_node.inputs['Color'].default_value = (0.01, 0.04, 0.08, 1.0)
bg_node.inputs['Strength'].default_value = 0.5
scene.world = world

# Camera
cam_data = bpy.data.cameras.new("RenderCamera")
cam_obj = bpy.data.objects.new("RenderCamera", cam_data)
collection.objects.link(cam_obj)
scene.camera = cam_obj
cam_obj.location = (0, -0.5, 7.5)
cam_obj.rotation_euler = (0, 0, 0)

# Cone Arrow Logo Geometry
bpy.ops.mesh.primitive_cone_add(radius1=1.6, radius2=0.1, depth=3.2, location=(0, 0.6, 0))
cone = bpy.context.active_object

glass_mat = bpy.data.materials.new(name="GlassReflective")
glass_mat.use_nodes = True
nodes = glass_mat.node_tree.nodes
nodes.clear()
out = nodes.new('ShaderNodeOutputMaterial')
bsdf = nodes.new('ShaderNodeBsdfPrincipled')
bsdf.inputs['Base Color'].default_value = (0.0, 0.55, 0.8, 1.0)
bsdf.inputs['Roughness'].default_value = 0.05
bsdf.inputs['Metallic'].default_value = 0.8
if 'Transmission Weight' in bsdf.inputs:
    bsdf.inputs['Transmission Weight'].default_value = 0.7
elif 'Transmission' in bsdf.inputs:
    bsdf.inputs['Transmission'].default_value = 0.7

links = glass_mat.node_tree.links
links.new(bsdf.outputs['BSDF'], out.inputs['Surface'])
cone.data.materials.append(glass_mat)

# Lower Base Cylinder
bpy.ops.mesh.primitive_cylinder_add(radius=0.9, depth=0.6, location=(0, -1.5, 0))
cyl = bpy.context.active_object
cyl.data.materials.append(glass_mat)

# Floating Torus Rings
bpy.ops.mesh.primitive_torus_add(major_radius=2.6, minor_radius=0.03, location=(0, 0, 0))
torus = bpy.context.active_object
torus.rotation_euler = (math.radians(65), math.radians(25), 0)

emit_mat = bpy.data.materials.new(name="CyanGlow")
emit_mat.use_nodes = True
emit_nodes = emit_mat.node_tree.nodes
emit_nodes.clear()
e_out = emit_nodes.new('ShaderNodeOutputMaterial')
e_emit = emit_nodes.new('ShaderNodeEmission')
e_emit.inputs['Color'].default_value = (0.41, 0.79, 0.95, 1.0)
e_emit.inputs['Strength'].default_value = 8.0
emit_mat.node_tree.links.new(e_emit.outputs['Emission'], e_out.inputs['Surface'])
torus.data.materials.append(emit_mat)

# Lights
light_data1 = bpy.data.lights.new(name="CyanKeyLight", type='POINT')
light_data1.energy = 1500
light_data1.color = (0.41, 0.79, 0.95)
light_obj1 = bpy.data.objects.new("CyanKeyLight", light_data1)
collection.objects.link(light_obj1)
light_obj1.location = (4, 4, 5)

light_data2 = bpy.data.lights.new(name="BlueFillLight", type='POINT')
light_data2.energy = 1000
light_data2.color = (0.0, 0.35, 0.6)
light_obj2 = bpy.data.objects.new("BlueFillLight", light_data2)
collection.objects.link(light_obj2)
light_obj2.location = (-4, -3, 3)

# Render Output
output_img = r"c:\Users\LENOVO\Desktop\avanza\site - avanza\public\assets\blender_hero_render.png"
scene.render.filepath = output_img
bpy.ops.render.render(write_still=True)
print("Successfully rendered Blender studio image to:", output_img)
