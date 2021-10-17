1. values added: 20
2. final result:  20
3. values added: 20
4. "ReferenceError: result is not defined" because result is not a global scope
5. "TypeError: Assignment to constant variable" because result is a const variable, so value cannot be changed
6. Due to the previous TypeError on line 9, the terminal stopped the program from executing further. If there was no error on line 9 (before line 13), another ReferenceError would occur on line 13.