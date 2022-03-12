var listaFilmes = [
    "https://upload.wikimedia.org/wikipedia/pt/7/79/Yesterday_%282019%29_poster.jpg",
    "https://1.bp.blogspot.com/-ImZPRqLsluE/WFK156_6pNI/AAAAAAAAYBY/0lEhNRF5wfQdLfr6hpT57_Jt2eBrE9H5wCLcB/s1600/arrival-kartoun-desert.jpg",
    "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/90/98/20169244.jpg", 
    "https://cdn.fstatic.com/media/movies/covers/2018/12/ONLINE_1-SHEET_rgb-e1545318776132.jpg", 
    "https://images-na.ssl-images-amazon.com/images/I/915nJZgjZOL.jpg"
  ];

for (var i=0; i<listaFilmes.length; i++){
    document.write("<img src=" + listaFilmes[i] + ">");
}