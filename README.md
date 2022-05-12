# Manga Downloaded Optimization Tool

Dependencies:

-   imagemagick : https://imagemagick.org/index.php
-   jpegoptim : https://github.com/tjko/jpegoptim

## Initialization

To use this tool:

-   Clone this repository :
    ```bash
    $ git clone https://github.com/Guillaume-FAURE/mangaOptimization
    ```
-   Change the path to the js program in the bash file
-   Make the commands global :
    ```bash
    mkdir ~/bin
    cp optimizeManga.bash ~/bin
    mv ~/bin/optimizeManga.bash ~/bin/$(basename -s .bash optimizeManga.bash)
    chmod a+x ~/bin/optimizeManga
    ```
-   Enjoy

## Use

Go to the repository where you have your manga downloaded and use the tool on \*:

```bash
optimizeManga *
```

## Current problems

-   If the first file has space in it, it could lead to bug.
