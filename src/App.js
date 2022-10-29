import React from "react";
import PropTypes from "prop-types";


function Food({name, picture, rating}){
  return (
    <div>
      <h1>I LIKE Food - {name}</h1>
      <h4>{rating}/5.0</h4>
      <img src={picture} width="100" alt={name}/>
    </div>
  )
}

const foodLike = [
  {
    id:1,
    name : 'KimChi',
    image : 'http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg',
    rating : 5,
  },
  {
    id:2,
    name : 'Chicken',
    image : 'https://th.bing.com/th/id/R.0e15be460370652f1a6e5a015fd089e2?rik=PHaVMZbrPFPEWw&riu=http%3a%2f%2fimage.chosun.com%2fsitedata%2fimage%2f201705%2f31%2f2017053100563_0.jpg&ehk=7ZwWRA9P36mlf6g30Dtkk4S25%2f%2bi%2fYoCRrZrsI7zcEA%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1',
    rating : 4.5,
  },
  {
    id:3,
    name : 'Samgiopsal',
    image : 'https://th.bing.com/th/id/R.725d5c166a7c62810748a4e3a572a6dc?rik=3orNThaol0FDsA&riu=http%3a%2f%2fpostfiles15.naver.net%2fMjAxNzAzMjBfOTcg%2fMDAxNDkwMDE4MTk1NzAz.6RgsyOIPH-tnTC3D3_cSV1GLsfR_mhBP1KBorcGarEQg.AdVAOCRFBKvUc1ZGN3nizSi9Jcq8aCCSP9jxgiha7Wsg.JPEG.stratsta%2fnaver-%ec%82%bc%ec%84%b1%ec%97%ad%eb%a7%9b%ec%a7%91-%ec%82%bc%ec%9c%a1%ea%b0%80-%ec%88%99%ec%84%b1%ec%82%bc%ea%b2%b9%ec%82%b4-13.jpg%3ftype%3dw966&ehk=EcfcXHFJl36NDQHUD%2bZ2bU95g3fgoNxTMDO10m7VDYo%3d&risl=&pid=ImgRaw&r=0',
    rating : 3,
  },
  {
    id:4,
    name : 'Ramen',
    image : 'https://th.bing.com/th/id/R.c3f5c4de236da2bb07024c533f527fdf?rik=GVPIw1ItTDqDiw&riu=http%3a%2f%2fd20aeo683mqd6t.cloudfront.net%2fko%2farticles%2ftitle_images%2f000%2f040%2f677%2fmedium%2fpixta_53717564_M.jpg%3f2020&ehk=iQqOe0XFe4oVPI0XscbcJ5PZH3L%2bcLnQ3wFxGgNOXFY%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1',
    rating : 4.8,
  },
  {
    id:5,
    name : 'Gopchang',
    image : 'https://ssproxy.ucloudbiz.olleh.com/v1/AUTH_e59809eb-bdc9-44d7-9d8f-2e7f0e47ba91/store16/e2a482dd86c9ff3054ce10556aeb6fa1_1042x782.JPG',
    
  },
];
/*
function renderFood(dish){
  return <Food name={dish.name} picture={dish.image} />
}
*/
//const renderFood=dish=><Food name={dish.name} picture={dish.image} />;

Food.propTypes = {
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number,
}

function App() {
  return (
    <div>
      {foodLike.map(
        dish=><Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      )}


    </div>
  );
}

export default App;
