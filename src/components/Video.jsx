import '../App.css';
function Video() {
    return (
        <div>
            <iframe
                width="768"
                height="432"
                src="https://www.youtube.com/embed/imJS5swk0Vc"
                title="Простой рецепт влажного морковного торта"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            />
        </div>
    );
}

export default Video;