const btn = document.getElementById('toggleVideos');
const content = document.getElementById('videoContent');

btn.addEventListener('click', () => {
    if(content.style.display === "none"){
        content.style.display ="block";
        btn.textContent = "Hide Videos";
        } else {
            content.style.display = "none";
            btn.textContent = "Start Watching";
        }
});