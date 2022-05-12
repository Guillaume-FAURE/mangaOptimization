const fs = require("fs");
const path = require("path");
const process = require("process");

const files = process.argv.slice(2);
const allChapters = extractChapters(files);
console.log(allChapters);
changeChapterName(allChapters);
removeSpace(files);

function removeSpace(mangas) {
	for (let i = 0; i < mangas.length; i++) {
		fs.renameSync(mangas[i], mangas[i].replace(/\ /gi, "-"));
	}
}

function extractChapters(mangas) {
	let allChapters = [];
	for (let i = 0; i < mangas.length; i++) {
		console.log(`./${mangas[i]}`);
		if (fs.lstatSync(`./${mangas[i]}`).isDirectory()) {
			const chapters = fs.readdirSync(`./${mangas[i]}`);
			let manga = [];
			for (let j = 0; j < chapters.length; j++) {
				const chaptersPath = path.join(mangas[i], chapters[j]);
				manga.push(chaptersPath);
			}
			allChapters.push(manga);
		} else {
			console.log(`./${mangas[i]} is a file`);
		}
	}
	return allChapters;
}

function changeChapterName(allChapters) {
	for (let i = 0; i < allChapters.length; i++) {
		const manga = allChapters[i];
		const mangaBaseName = path.dirname(manga[0]);
		for (let j = 0; j < manga.length; j++) {
			const chapter = manga[j];
			const chapterBaseName = path.basename(chapter);
			if (chapterBaseName.match(/chapter.[0-9.]*/gi)) {
				const newChapName = chapterBaseName
					.match(/chapter.[0-9.]*/gi)[0]
					.replace(/\ /gi, "");
				fs.renameSync(
					`${mangaBaseName}/${chapterBaseName}`,
					`${mangaBaseName}/${newChapName}`
				);
			}
		}
		console.log(`${path.basename(mangaBaseName)} done!`);
	}
}
