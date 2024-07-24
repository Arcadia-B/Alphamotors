import React from 'react';
import MotorCard from '../MotorCycle/MotorCard';
import ceket from "../../assets/costume/ceket.jpg";
import pantolon from "../../assets/costume/pantolon.jpg"
import n23 from "../../assets/costume/n23.jpg"
import b24 from "../../assets/costume/b24.jpg"

const costumes = [
  {
    id: 1,
    name: 'ADVENTURE ERKEK SÜRÜŞ CEKETİ',
    description: 'Adventure sürüş ceketi ve pantolonu ayrı ayrı olarak satılır ve fermuarla birbirine bağlanır. Takımın erkek ve kadın versiyonları mevcuttur. Yüksek düzeyde koruma ve uzun mesafe sürüş konforu için tasarlanmıştır. Takım, her türlü hava koşulunda hareket esnekliği sağlayan çıkarılabilir termal astar ve sabit su geçirmez astar ile donatılmıştır. Polyester, poliamid, poliüretan ve naylon malzemelerin karışımından üretilmiş bir kumaşa sahiptir. Cekette 6 adet dış ve 4 adet iç cep vardır. Pantolonda 2 adet kargo cebi vardır. Bu Adventure seti, en uzun ve en zorlu sürüşlerin üstesinden gelmek için üretildi. ', 
    image: ceket, 
  },
  {
    id: 2,
    name: 'ADVENTURE ERKEK SÜRÜŞ PANTOLONU',
    description: 'Adventure sürüş ceketi ve pantolonu ayrı ayrı olarak satılır ve fermuarla birbirine bağlanır. Takımın erkek ve kadın versiyonları mevcuttur. Yüksek düzeyde koruma ve uzun mesafe sürüş konforu için tasarlanmıştır. Takım, her türlü hava koşulunda hareket esnekliği sağlayan çıkarılabilir termal astar ve sabit su geçirmez astar ile donatılmıştır. Polyester, poliamid, poliüretan ve naylon malzemelerin karışımından üretilmiş bir kumaşa sahiptir. Cekette 6 adet dış ve 4 adet iç cep vardır. Pantolonda 2 adet kargo cebi vardır. Bu Adventure seti, en uzun ve en zorlu sürüşlerin üstesinden gelmek için üretildi.', 
    image: pantolon, 
  },
  {
    id: 3,
    name: 'Monster Energy® Yamaha MotoGP Takım Replica Polo',
    description: 'Yarış günlerinin olmazsa olmazı Monster Energy® Yamaha MotoGP Team Erkek Replica Polo, dünyanın dört bir yanındaki yarışçılar tarafından giyilen şık bir parçadır. 100 polyester, Yarış Siyahı ve Mavisi renklerinde ve M1 motosikleti üzerine tasarlanan tişört, Yamaha Racing, Monster Energy® ve sponsor logolarıyla basılmıştır ve ekstra kenar için kamuflaj baskılı yan panellere sahiptir. Fermuarlı yaka rahat bir uyum sağlar.', 
    image: b24, 
  },
  {
    id: 4,
    name: 'Monster Energy Yamaha MotoGP Team Replica Şapka',
    description: 'Dünyanın dört bir yanındaki Yamaha pit boxlarının ve tribünlerinin temel parçası olan Monster Energy® Yamaha MotoGP Team Yetişkin Kopya Şapkası, güneşli yarışlar için şık ve işlevseldir. Pamuk ve polyesterden üretilen ve takımın M1 yarış motosikletinin mavi ve siyah renklerinde tasarlanan ayarlanabilir kayış, iç ter bandı ve nefes alma delikleri herkes için rahat bir uyum sağlar. Tepe ve yan kısımlardaki Yamaha Racing ve Monster Energy® markaları, seyahat ettiğin her yerde MotoGP yarış tutkunu gösterir. ', 
    image: n23, 
  },
];

const Costume = () => {
  return (
    <div className="container mx-auto min-h-screen">
      <div className="flex flex-wrap justify-center">
        {costumes.map((costume) => (
          <MotorCard key={costume.id} motor={costume} />
        ))}
      </div>
    </div>
  );
}

export default Costume;
