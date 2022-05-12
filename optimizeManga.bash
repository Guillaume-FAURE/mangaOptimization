#!/bin/bash

function renameMangaChapter {
    dirManga=$1/../*
    echo $dirManga
    node ~/projects/optimizeManga/renameMangaChapter.js $dirManga
}

function optimizeImages {
    for MANGA in $@
    do
        echo $MANGA
        for CHAPTER in $MANGA/*
        do
            echo $CHAPTER
            mogrify -format jpg $CHAPTER/*.png > /dev/null 2>&1
            jpegoptim -t -m 25 $CHAPTER/* > /dev/null
            rm $CHAPTER/*.png > /dev/null 2>&1
        done
    done
}

renameMangaChapter $@
optimizeImages $@


