class ScratchVM:
    
    def __init__(self):
        self.data: list[str] = []
        self.stack: list[str] = []
        
    def reset(self):
        self.data = []
        self.stack = []
        
    def run(self, code: list[str]):
        program_counter = 1
        while program_counter <= len(code):
            instruction = code[program_counter - 1]
            print(program_counter, instruction)
            if instruction == 'push':
                self.stack.append(code[program_counter])
                program_counter += 2
            elif instruction == 'ref':
                index = int(float(self.stack[-1])) - 1
                self.stack[-1] = self.data[index] if index < len(self.data) else '0'
                program_counter += 1
            elif instruction == 'set':
                value = self.stack.pop()
                address = int(float(self.stack.pop()))
                self.set_value(address, value)
                program_counter += 1
            elif instruction == 'goto':
                address = int(float(code[program_counter]))
                program_counter = address
            elif instruction == 'gotoif':
                address = int(float(code[program_counter]))
                value = int(float(self.stack.pop()))
                if value:
                    program_counter = address
                else:
                    program_counter += 2
            elif instruction == 'add':
                value2, value1 = float(self.stack.pop()), float(self.stack.pop())
                self.stack.append(str(value1 + value2))
                program_counter += 1
            elif instruction == 'sub':
                value2, value1 = float(self.stack.pop()), float(self.stack.pop())
                self.stack.append(str(value1 - value2))
                program_counter += 1
            elif instruction == 'mul':
                value2, value1 = float(self.stack.pop()), float(self.stack.pop())
                self.stack.append(str(value1 * value2))
                program_counter += 1
            elif instruction == 'div':
                value2, value1 = float(self.stack.pop()), float(self.stack.pop())
                self.stack.append(str(value1 / value2))
                program_counter += 1
            elif instruction == 'eq':
                self.stack.append('1' if float(self.stack.pop()) == float(self.stack.pop()) else '0')
                program_counter += 1
            elif instruction == 'neq':
                self.stack.append('1' if float(self.stack.pop()) != float(self.stack.pop()) else '0')
                program_counter += 1
            elif instruction == 'gt':
                self.stack.append('1' if float(self.stack.pop()) < float(self.stack.pop()) else '0')
                program_counter += 1
            elif instruction == 'ge':
                self.stack.append('1' if float(self.stack.pop()) <= float(self.stack.pop()) else '0')
                program_counter += 1
            elif instruction == 'lt':
                self.stack.append('1' if float(self.stack.pop()) > float(self.stack.pop()) else '0')
                program_counter += 1
            elif instruction == 'le':
                self.stack.append('1' if float(self.stack.pop()) >= float(self.stack.pop()) else '0')
                program_counter += 1
            elif instruction == 'not':
                self.stack[-1] = '1' if self.stack[-1] == '0' else '0'
                program_counter += 1
            elif instruction == 'nop':
                program_counter += 1
            else:
                print(f'Not implemented instruction "{instruction}".')
                return
            print(self.data, self.stack)
            
    def set_value(self, address: int, value: str):
        while len(self.data) < address:
            self.data.append('0')
        self.data[address - 1] = value