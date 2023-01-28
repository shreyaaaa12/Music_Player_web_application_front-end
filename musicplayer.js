const music = new Audio('audios/1.mp3');
//music.play();

const songs=[
{
    id: 1 , 
    sname: 'Tune 1 ' ,
poster: 'imgs/1.jpeg',
}
,
{
    id: 2 , 
    sname: 'Tune 2 ' ,
poster: 'imgs/2.jpeg',
}
,
{
    id: 3 , 
    sname: 'Tune 3 ' ,
poster: 'imgs/3.jpeg',
}
,
{
    id: 4 , 
    sname: 'Tune 4 ' ,
poster: 'imgs/4.jpeg',
}
,
{
    id: 5 , 
    sname: 'Tune 5 ' ,
poster: 'imgs/5.jpeg',
}
,
{
    id: 6 , 
    sname: 'Tune 6 ' ,
poster: 'imgs/6.jpeg',
}

]

Array.from(document.getElementsByClassName('songitem')).forEach(e,i)=>{
    e.getElementsByTagName('img')[0].src= songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML= songs[i].sname;

});
