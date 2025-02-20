let progress = document.getElementById('progress')
let song = document.getElementById('song')
let ctrlIcon = document.getElementById('ctrlIcon')

song.onloadedmetadata = () =>{
    progress.max = progress.duration;
    progress.value = progress.currentTime;
}