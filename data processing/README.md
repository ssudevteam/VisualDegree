## Commands from the `data/` Directory

| Command                  | Description                                                                 |
| ------------------------ | --------------------------------------------------------------------------- |
| `node generate major cs` | Turns raw data into CS major object                                         |
| `node convert major cs`  | Converts CS major object's `courseCollection` into React Flow data nodes.js |
| `node copy cs flow`      | Copies the CS major as React Flow data to the app assets directory          |

### Instructions

1. First, place raw data into the `-base` directory.
2. Each layer of cleaning is held in the `operations/` directory.
3. `workingfiles/` contains the file output after each step, similar to "showing your work".
4. The `-output` directory contains the desired end states of processing.

Usage:
commands run from data/ meant to be run offline.

Optimization:

- Some numbers passed as strings to the program might be better off converted to integers first.

Design:

!I named the react-flow\_\_node parameters shorthand but I should probably undo that
