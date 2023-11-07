import argparse
import yaml
from pathlib import Path
from typing import Literal

WORLD_BASE_PATH = Path(__file__).parent / 'world_base.txt'
INIT_WORLD_INFO_PATH = Path(__file__).parent / 'init_world_info.txt'
OBJECT_MAP_PATH = Path(__file__).parent / 'object_map.yaml'

parser = argparse.ArgumentParser()
parser.add_argument("--mode", choices = ['list', 'JScratch'], default = 'list')
args = parser.parse_args()
mode: Literal['list', 'JScratch'] = args.mode

# 地形情報の読み込み
def load_world_base(world_base_path: str | Path) -> list[list[str]]:
    with open(world_base_path) as f:
        lines = f.read().splitlines()
    while len(lines) > 0 and len(lines[-1]) == 0:
        lines = lines[:-1]
    size_x = max(len(line) for line in lines)
    lines = [(line + ' ' * size_x)[:size_x] for line in lines]
    world_array = [list(line) for line in lines]
    world_array.append(['#'] * size_x) # 岩盤の追加
    world_array = world_array[::-1] # インデックス0が一番下になるようにする
    
    return world_array

# オブジェクト名変換情報の読み込み
def load_object_map(object_map_path: str | Path) -> dict[str, str]:
    with open(object_map_path, encoding='utf-8') as f:
        object_map: dict[str, str] = yaml.safe_load(f)
    return object_map

# 透過オブジェクト
transparent_objects = [
    '空'
]

world_array = load_world_base(WORLD_BASE_PATH)
SIZE_X = len(world_array[0])
SIZE_Y = len(world_array)

object_map = load_object_map(OBJECT_MAP_PATH)

# オブジェクト名のマッピング
unknown_objects: set[str] = set()
for j in range(SIZE_Y):
    for i in range(SIZE_X):
        if world_array[j][i] in object_map:
            world_array[j][i] = object_map[world_array[j][i]]
        else:
            unknown_objects.add(world_array[j][i])
            world_array[j][i] = 'Unknown'
if len(unknown_objects) > 0:
    print(f'Unknown Objects: {list(unknown_objects)}')
    
# ワールドの範囲を決める
MIN_X = -((SIZE_X - 1) // 2)
MAX_X = SIZE_X // 2    
MIN_Y = 0
MAX_Y = len(world_array) - 1

# 上に非透過ブロックがある草ブロックを土ブロックに置き換える
for j in range(SIZE_Y - 1):
    for i in range(SIZE_X):
        if world_array[j][i] == '草ブロック' and world_array[j + 1][i] not in transparent_objects:
            world_array[j][i] = '土ブロック'

# 出力
if mode == 'JScratch':
    OBJECT_STRUCT_SIZE = 1
    OBJECT_STRUCT = [
        'NAME',
    ]
    var_map = {
        'SIZE_X': SIZE_X,
        'SIZE_Y': SIZE_Y,
        'MIN_X': MIN_X,
        'MAX_X': MAX_X,
        'MIN_Y': MIN_Y,
        'MAX_Y': MAX_Y,
        'OBJECT_STRUCT_SIZE': len(OBJECT_STRUCT),
    }
    for i, entry in enumerate(OBJECT_STRUCT):
        var_map[f'OBJECT_STRUCT_{entry}'] = i
    lines = []
    lines.append('const ' + ', '.join([f'{name} = {value}' for name, value in var_map.items()]) + ';')
    lines.append('const INIT_WORLD_INFO[] = [')
    for row in world_array:
        lines.append('    ' + ', '.join([f'"{name}"' for name in row]) + ',')
    lines.append('];')
    lines.append(f'var world[{SIZE_X * SIZE_Y * OBJECT_STRUCT_SIZE}];')
    with open(INIT_WORLD_INFO_PATH, mode='w', encoding='utf-8') as f:
        f.write('\n'.join([str(line) for line in lines]))
else:
    lines: list = [MIN_X, MAX_X, MIN_Y, MAX_Y]
    for row in world_array:
        lines.extend(row)
    with open(INIT_WORLD_INFO_PATH, mode='w', encoding='utf-8') as f:
        f.write('\n'.join([str(line) for line in lines]))