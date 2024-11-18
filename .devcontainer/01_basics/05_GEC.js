when js file is executed a global execution context is created first that is accessed using this variacle
When a function is called, a new Function Execution Context (FEC) is created on top of the GEC. When the function finishes, its context is removed, and the GEC remains.
  The GEC is created once when the script starts running.
It contains everything that is defined globally (e.g., variables and functions).
After all the code is executed, the GEC is cleared but the global object (window) persists. 
