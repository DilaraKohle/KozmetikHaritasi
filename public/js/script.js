function showContent(contentType) {
  const dynamicContent = document.getElementById('dynamic-content');

  if (contentType === 'alkol') {
    dynamicContent.innerHTML = `
            <h1>Alkoller</h1>
            <p>
            Kullandığımız cilt bakım ürünlerinin ve kozmetiklerin içerik listesine baktığımızda adında "alcohol" kelimesi geçen bir sürü içerik görüyoruz ve bu üründe alkol varmış deyip, hepsinin sağlığımıza zarar verdiğini düşünüyoruz ya da onların önemsiz olduklarını varsayıp geçiyoruz. Dürüst olmam gerekirse, ben de zamanında gördüğüm her alkol kelimesine düşmanca bakardım; fakat içerikler hakkında bilinçlendikçe en azından belli noktalarda hatalar yaptığımı fark ettim. 
            Alkol, aslında karbon atomuna (C) doğrudan bir -OH grubunun bağlı olduğu organik bileşiklerin genel adıdır. Yani; alkollü içeceklerde bulunan etanol C2H5OH da, kimyasal formülü C3H8O3 olan gliserinde birer alkoldür. Ancak, bunlardan birini belli sebeplerden hayatımızda tamamen istemezken, diğerinin (gliserin) varlığından memnuniyet duyarız. Söylemek istediğim, alkoller hayatımızın içindeler; yediğimiz meyve ve sebzelerden tutun, kullandığımız deterjanlara, sabunlara varana kadar doğal ya da doğal olmayan her şeydeler. Önemli olan, onların hangilerinin bize faydalı, hangilerinin zararlı olduğunu ayırt edebilmek. 
            </p>

            <img src="img/Alkol.jpg" style=" height: 400px;width:400px;"> 

            <h1>Alcohol Denat (Alkol denat, Etanol, Methanol)</h1>
            <p>
            Kozmetik ürünlerin içerik listelerinde sıkça gördüğümüz alkol denat, basit tanımlamayla, etil alkolün içilemeyen şeklidir. Nemlendirici, tonik ve temizleyicilerin içerik listesinde, hem de en üst sıralarda bu maddeye sıklıkla rastlarız. Alkol denat içerik listelerinde şu isimlerle de karşımıza çıkar; etanol, methanol. Bu maddeyi içeren ürünler; alkolün yapısından kaynaklı olarak çok hafif yapıda olurlar, kolay uygulanılar, cilde yumuşacık ve pürüzsüz olmuş hissi ve genellikle yapay bir ferahlık verirler. Bu durum da, alkol denat içeren ürünlerden hoşlanmamızı sağlar. Fakat, bu şahane his ne yazık ki, yanıltıcıdır! Markalar, biz bu histen hoşlandığımız için ve alkol denat nispeten ucuz bir içerik olduğu için ürünlerinde bu maddeyi kullanıyorlar. Ancak, etil alkol cilt bariyerimizi zedeleyerek, cilt yapımızı bozuyor. Şunu unutmayın, etil alkolün temas ettiği cilt kendini kolayca dış etkilerden ve hasarlardan koruyamaz. Serbest radikallere açık ve savunmasız hale gelir ve ciltte lekelenmeler, kahverengi benler artar. Cildimiz, zararlı maddelerin alt katmanlarına inmesini engelleyemez hale gelir. 
            Yağlı ciltliler, alkol denatın ciltlerine iyi geldiğini ve sivilcelerini kuruttuğunu düşünebilir. Fakat uzun vadede, alkol bazlı ürünler ciltteki irritasyonu arttırır. İlk başta etil alkol ciltteki yağı alır fakat, bir süre sonra cildimiz "Eyvah, yağsız kaldım; daha çok yağ salgılamalıyım" mesajı aldığı için daha çok yağlanmaya başlar. Akneli ciltler için en büyük kötü etki de, sivilce yapan bakterilerin zamanla alkolün etkisi ile güçlenerek, direnç kazanıp çoğalmasıdır.  
            </p>

            <h1>SD Alcohol, Isopropyl Alcohol</h1>
            <p>
            Denatüre edici (ürünün doğasını değiştiren) bir ajan ile etanol (etil alkol) karışımı olan SD alkol; ağızdan alındığında doğum kusurlarına yol açan geniş çapta toksik bir maddedir. Kişisel bakım ürünlerinde kullanılan SD alkol tabi ki, ağız yoluyla alımı kadar büyük etki yaratmayacaktır ancak; cildin koruyucu tabakasını yok eden, cildi nemsiz bırakan çok kurutucu ve tahriş edici bir maddedir. Bakteri, mantar ve virüslere karşı cildin savunmasız kalmasına neden olan SD alkol, propylenden yapılır. Erken yaşlanmamıza ve kahverengi benlerin artmasına neden olur. Kahverengi benlerin artışının neye sebebiyet verdiğini de hepimiz biliyoruz.
            </p>

            <h1>Benzyl Alcohol</h1>
            <p>
            Kozmetik ürün içeriklerinde genellikle koku verici madde olarak kullanılan Benzyl alkol, kullandığımız ürünün emilimini de arttıran bir alkol çeşididir. Çözücü ve koruyucu olarak da kullanılır. Alkol denat ve SD alkol kadar zararlı olmamakla birlikte; temas halinde gözde ve ciltte alerjiye sebep olabilir. Aynı zamanda, bu maddenin cilt tahrişine ve kansere sebep olduğuna dair güçlü kanıtlar bulunmaktadır. 
            Bunlar, kozmetik ürünlerin içeriklerinde en sık karşılaştığımız ve görmek istemeyeceğimiz alkoller... En azından içerik listelerinde ilk 5 sırada olmamalarına özen göstermemiz gerektiğini düşünüyorum. Bir de, sırf isminde alkol bulunduğu için günah keçisi olan, halbuki zararlı olmayan alkoller de var.
            </p>
            
            `;
  }
  else if (contentType === 'vitamin') {
    dynamicContent.innerHTML = `
            <h1>Vitaminler</h1>
            <p>
            Vücudumuzun işlevlerini gerçekleştirmek ve sağlığını korumak için vitaminlere ihtiyaç duyduğu herkes tarafından bilinen bir gerçek. Ama cildimizin de vitamin içeren bakım ürünlerinden faydalandığını biliyor muydunuz? Ampuller ve serumlardan sonra şimdi revaçta olan güzellik trendi vitamin takviyeleri. Peki bu takviyelerin özelliği ne? Vitaminlerin iyileştirici özelliklerini en iyi şekilde destekleyen yoğunlaştırılmış etken maddeler içeriyorlar. Serum kıvamındaki sıvı bakım ürünleri, etken maddelerin cildin alt tabakalarına nüfuz etmesini sağlıyor. Böylece kırışıklıklar sadece yüzeysel olarak gizlenmiyor, aksine derinden dolduruluyor. Cildin üst tabakasında anında görülebilen etki ve uzun süreli bakım sayesinde sağlıklı bir ışıltı ve pürüzsüz, arınmış bir cilt elde etmek mümkün. Seruma alternatif olarak vitaminlerle zenginleştirilmiş takviye yağları ise özellikle kuru ciltler için ideal.
            </p>

            <h1>A Vitamini ( Retinol)</h1>
            <p>
            A vitaminini aranızdaki cilt bakımı bağımlıları retinol ismiyle tanıyacaktır. Bu bileşik, yaşlanma karşıtı bakım için en etkili ve en popüler malzemelerden biridir. Peki ne işe yarar? Hücre yenilenmesini hızlandırır, akne ve iltihapları hafifletir ve çizgi ve kırışıklıkları giderir. Retinol günlük kullanıma uygun, hafif bir madde olmadığından A vitamini içeren takviyeleri haftada ikiden fazla kullanmamalısınız. Retinol, cildi UV ışınlarına karşı daha hassas hale getirdiği için retinol kullandığınız dönemde her gün güneş kremi sürmeyi unutmayın. Hassas bir cilde sahipseniz özellikle dikkatli olun.
            </p>

            <h1>B3 Vitamini ( Niasinamid)</h1>
            <p>
            B vitamini sadece iş dünyasında değil, cilt bakımında da çok değerlidir. Özellikle B3 vitamininin (niasinamid) cilt bariyerini koruduğu ve güçlendirdiği test edilmiş ve kanıtlanmıştır. Bu sayede toz, UV ışınları, kir parçacıkları ve sigara dumanı cildi negatif etkileyerek daha hızlı yaşlanmasına neden olmaz. Niasinamid aynı zamanda yumuşatıcı, iltihap önleyici ve aydınlatıcı etkilere sahiptir. Bütün bu pozitif özellikler niasinamidi büyük şehirlerde yaşayan kadınlar için çok anlamlı olan kirlilik karşıtı bakımın yıldızı yapar.
            </p>

            <h1>C Vitamini ( Askorbik Asit)</h1>
            <p>
            C vitamini şu sıralar cilt bakımıyla ilgilenen kimsenin elinden düşmüyor. Bu doğa harikası vitamin gerçekten de her derde devadır. Ne işe mi yarar? Liste uzun: Lekeleri aydınlatarak renk farklılıklarını eşitler, cildin üst tabakasında peeling etkisi yaratır ve cildi serbest radikallerden koruyarak daha uzun süre genç kalmasını sağlar. Askorbik asit, cildine sağlıklı bir ışıltı katmak isteyen herkes için idealdir. Kuru ve hassas bir cilde sahip olanların, askorbik asidi bir kozmetik uzmanına danıştıktan sonra kullanmaları önerilir. Diğer tüm cilt tiplerine ise faydası olacaktır. A vitamini gibi askorbik asit de cildi UV ışınlarına karşı hassas hale getirir, bu yüzden mutlaka SPF’li bir gündüz kremi kullanmak ve güneşe çıkarken güneş kremi sürmek gerekir. Bir ipucu daha: C vitamini takviyelerini serin ve karanlık bir yerde saklayın ve kapağını sıkıca kapatın. Ürün oksijenle temasa geçerse kötü kokar, çabuk bozulabilir ve etkisini kaybedebilir.
            </p>

            <h1>E Vitamini ( Tokoferol)</h1>
            <p>
            E vitamini teknik olarak tek bir madde değildir, aksine yaklaşık 16 tokoferol ve tokotrienolden oluşan koca bir grubu belirtir. Ama şu an kimya dersinde olmadığımız için bu ayrıntılara girmeden E vitamininin cilde etkisine odaklanabiliriz. E vitamini pek çok iyi özelliğiyle öne çıkar: Güneş ışınları ve diğer çevresel faktörlerin sebep olduğu hücre hasarını giderir. Bu yüzden gece kremlerinin ve uyku maskelerinin içindekiler listesinde tokoferole sık rastlanır. Ayrıca kuru cilde nem kazandırır ve cildin nemi hapsetmesini sağlayarak cildi esnekleştirir. İpucu: Tokoferol, C vitamini ve lipitlerle birlikte kullanıldığında daha da etkili olur.
            </p>

        `;
  }
  else if (contentType === 'asit') {
    dynamicContent.innerHTML = `
 
        <h1>Asitler</h1>
        <p>
        İsmi korkutucu gelse de, gerçek anladığınız anlamda, insanların yüzünü yakan asitler değil. Bu asitler; meyvelerden organik olarak elde edilen asitler ve yağlardan elde edilen asitler.Meyve asitleri AHA olarak geçer ve diğerleri de BHA olarak geçer. Bunlar, kozmetik uygulamalar için farklı şekillerde kozmetik firmalar tarafından elde ediliyor ve şişeleniyor. İki farklı uygulama alanı var; birincisi profesyonel uygulama (kliniklerde ve güzellik merkezlerinde kullanılıyor), diğeri ise ev uygulamalarına yönelik ürünler.
        </p>

        <h1>Hyalüronik asit</h1>
        <p>
        Hyalüronik asit, vücutta aslında var olan ve vücudun kendi kendine bir miktar üretebildiği, cilde nem ve esneklik sağlayabildiği bir maddedir. Çeşitli sebeplerden dolayı vücudun ürettiği hyalüronik asidi vücut artık üretemediği veya yeterli olmadığı durumlarda hyalüronik asit dışarıdan takviye edilmeye çalışılır. Günümüzde birçok cilt bakım ürününde hyalüronik asit bulunmaktadır ve bu sayede istenilen nem ve esneklik sağlanmış olur. Hyalüronik asit aynı zamanda yaşlanma etkilerinin geciktirilmesinde, kırışıklık görünümünün azaltılmasında ve ciltteki sarkmaların önlenmesinde de oldukça sık kullanılan bir yöntemdir. Hyalüronik asit etkileri nedeniyle gençlik aşısı olarak da bilinmektedir.Bu yazımızda hyalüronik asidin ne olduğu, ne işe yaradığı, hyalüronik asidin cilde faydalarının neler olduğu, hyalüronik asidin nasıl uygulandığı, kimlere uygulandığı, hyalüronik asidin hamilelere yapılıp yapılmadığı, hyalüronik asidin zararlı olup olmadığı, hangi bölgelere uygulandığı ve hyalüronik asidin evde yapılıp yapılmayacağı hakkında detaylı bilgilendirme yapacağız.
        </p>

        <h1>Hyalüronik asit ne işe yarar?</h1>
        <p>
        Hyalüronik asit vücudun temel maddesidir ve çeşitli sebeplere bağlı olarak zamanla vücuttan eksilmektedir. Bu durumda hyalüronik asit dışarıdan kozmetik malzemelerle, enjeksiyon yolu ile ve gıda maddeleriyle sağlanmaktadır. Hyalüronik asit cilde nem ve esneklik kazandırarak yaşlanma durumunu geciktirmektedir. Sadece yaşlanmayı geciktirmekle kalmayarak eklem ve dokuların da onarılmasında da oldukça etkili olan bir yöntemdir.
        </p>

        `;
  }

}

// Sayfa ilk yüklendiğinde varsayılan kategori içeriği gelsin
document.addEventListener('DOMContentLoaded', function () {
  const firstCategoryButton = document.querySelector('.vertical-nav a');
  if (firstCategoryButton) {
    firstCategoryButton.click();
  }
});


//Hakkımızda Sayfasına bastığımızda aşağıya inmesi 
document.addEventListener("DOMContentLoaded", function () {
  var contactLink = document.querySelector("#hakkimizda-link");
  var footer = document.querySelector("footer");

  contactLink.addEventListener("click", function (event) {
    event.preventDefault();
    footer.scrollIntoView({ behavior: 'smooth' });
  });
});


const products = [
  {
    name: "Bioderma Güneş Kremi",
    description: "Lorem ipsum dolor ",
    image: "img/guneskremi/biodermaG.webp",
    content: ["alkol", "retinol"],
    url:"https://www.bioderma.com.tr/urunlerimiz/photoderm/spot-spf-50"
  },

  {
    name: "Dermoskin 50 SPF Güneş Kremi",
    description: "Lorem ipsum dolor ",
    image: "img/guneskremi/dermoskin1.png",
    content: ["alkol", "retinol"],
    url:"https://www.dermoskin.com.tr/Face-Protection-SPF-50"
  },
  {
    name: "Dermoskin 97 SPF Güneş Kremi",
    description: "Lorem ipsum dolor ",
    image: "img/guneskremi/dermoskin2.jpg",
    content: ["alkol", "retinol"],
    url:"https://www.dermoskin.com.tr/Ultra-Face-Protection-SPF-97"
  },
  {
    name: "La Roche Güneş Kremi",
    description: "Lorem ipsum dolor ",
    image: "img/guneskremi/larocheG.webp",
    content: ["alkol", "retinol"],
    url:"https://www.laroche-posay.com.tr/anthelios-uvmune-400-fluid-yuz-gunes-kremi"
  },
  {
    name: "Maruderm Güneş Kremi",
    description: "Lorem ipsum dolor",
    image: "img/guneskremi/marudermG.png",
    content: ["alkol", "retinol"],
    url:"https://www.maruderm.com/maruderm-spf-50-leke-karsiti-gunes-kremi"
  },
  {
    name: "Purest Güneş Kremi",
    description: "Lorem ipsum dolor",
    image: "img/guneskremi/purestnormal.png",
    content: ["alkol", "retinol"],
    url:"https://thepurestsolutions.com/lekeli-ciltler-icin-antioksidan-destekli-renkli-gunes-kremi-blemish-defense-50-spf"
  },
  {
    name: "Sebamed Güneş Kremi",
    description: "Lorem ipsum dolor", image: "img/guneskremi/sebamed.webp", content: ["alkol", "retinol"],
    url:"https://www.sebamed.com.tr/urunler/cok-yonlu-koruyucu-gunes-kremi-spf30"
  },
  {
    name: "Sinoz Güneş Kremi",
    description: "Lorem ipsum dolor ", 
    image: "img/guneskremi/sinoz.jpg",
     content: ["alkol", "retinol"],
     url:"https://www.sinoz.com.tr/sinoz-spf-50-ton-esitleyici-pembe-yuz-gunes-kremi-pa-209-p"
  },
  {
    name: "Solante Güneş Kremi",
    description: "Lorem ipsum dolor",
    image: "img/guneskremi/solante.png",
    content: ["alkol", "retinol"],
    url: "https://solante.com/urun/solante-atopica-spf-50-losyon/"
  },
  {
    name: "Bioderma Nemlendirici",
    description: "Lorem ipsum dolor", image: "img/nemlendirici/biodermaN.png",
    content: ["alkol", "vitamin", "asit"],
    url: "https://www.bioderma.com.tr/urunlerimiz/atoderm/cream-ultra"
  },
  {
    name: "Cerave Nemlendirici",
    description: "Lorem ipsum dolor",
    image: "img/nemlendirici/cerave.webp",
    content: ["alkol", "vitamin", "asit"],
    url: "https://www.trendyol.com/cerave/nemlendirici-krem-kuru-ciltler-seramid-ve-hyaluronik-asit-icerikli-yuz-vucut-50ml-p-3748245"
  },
  {
    name: "Cream Co Nemlendirici",
    description: "Lorem ipsum dolor",
    image: "img/nemlendirici/creamco1.webp",
    content: ["alkol", "vitamin", "asit"],
    url: "https://creamco.com.tr/moisturizer-50-ml"
  },
  {
    name: "Cream Co Nemlendirici",
    description: "Lorem ipsum dolor",
    image: "img/nemlendirici/creamco2.webp",
    content: ["alkol", "vitamin", "asit"],
    url: "https://creamco.com.tr/cloud-moisturizer"
  },
  {
    name: "Krijen Nemlendirici",
    description: "Lorem ipsum dolor",
    image: "img/nemlendirici/krijenN.png",
    content: ["alkol", "vitamin", "asit"],
    url: "https://www.krijen.com/collections/kremler/products/kuru-cilt-yuz-kremi"
  },
  {
    name: "La roche Nemlendirici",
    description: "Lorem ipsum dolor",
    image: "img/nemlendirici/larocheN.webp",
    content: ["alkol", "vitamin", "asit"],
    url: "https://www.laroche-posay.com.tr/toleriane-sensitive-riche-nemlendirici"
  },
  {
    name: "Maruderm Nemlendirici",
    description: "Lorem ipsum dolor",
    image: "img/nemlendirici/marudermN.png",
    content: ["alkol", "vitamin", "asit"],
    url: "https://www.maruderm.com/maruderm-hyaluronik-asit-nemlendirici-yuz-ve-vucut-cilt-bakim-kremi-200-ml"
  },
  {
    name: "Neostrata Nemlendirici",
    description: "Lorem ipsum dolor", image: "img/nemlendirici/neostrataN.png",
    content: ["alkol", "vitamin", "asit"],
    url: "https://www.neostrata.com.tr/urunle/seriler/skin-active/skin-active-matriks-destekleyici-nemlendirici-spf30"
  },
  {
    name: "Cream Co Serum",
    description: "Lorem ipsum dolor", image: "img/serum/creamcoS.png", content: ["vitamin", "asit"],
    url: "https://creamco.com.tr/hyaluronic-acid-peptide-serum-30-ml"
  },
  {
    name: "Luvit C Serum",
    description: "Lorem ipsum dolorr", image: "img/serum/luvitC.png", content: ["vitamin", "asit"],
    url: "https://luvit.com.tr/aydinlatici-c-vitamini-serumu"
  },
  {
    name: "Luvit Centella Serum",
    description: "Lorem ipsum dolor", image: "img/serum/luvitCentella.png", content: ["vitamin", "asit"],
    url: "https://luvit.com.tr/centella-ozlu-serum"
  },
  {
    name: "Luvit Gözenek Serum",
    description: "Lorem ipsum dolor", image: "img/serum/luvitGözenek.png", content: ["vitamin", "asit"],
    url: "https://luvit.com.tr/gozenek-sikilastirici-serum"
  },
  {
    name: "Luvit Nem Serum",
    description: "Lorem ipsum dolor", image: "img/serum/luvitNem.png", content: ["vitamin", "asit"],
    url: "https://luvit.com.tr/yogun-nemlendirici-serum"
  },
  {
    name: "Luvit Peptit Serum",
    description: "Lorem ipsum dolor", image: "img/serum/luvitPeptit.png", content: ["vitamin", "asit"],
    url: "https://luvit.com.tr/onarici-peptit-serum-30-ml"
  },
  {
    name: "Sephora Serum",
    description: "Lorem ipsum dolor", image: "img/serum/sephoraS.png", content: ["vitamin", "asit"],
    url: "https://www.sephora.com.tr/p/ultra-glow-serum-P3666033.html"
  },
  {
    name: "The Inkey List Serum",
    description: "Lorem ipsum dolorr",
    image: "img/serum/theinkeyS.png",
    content: ["vitamin", "asit"],
    url: "https://www.sephora.com.tr/p/hyaluronic-acid-serum-460014.html"

  },
  {
    name: "The Purest Serum",
    description: "Lorem ipsum dolor", image: "img/serum/thepurestS.png", content: ["vitamin", "asit"],
    url: "https://thepurestsolutions.com/hyaluronik-asit-yenileyici-cilt-bakim-serumu-30ml"
  }
];

document.addEventListener("DOMContentLoaded", function () {
  showAllProducts();
});
function showAllProducts() {
  displayProducts(products);
}

// Ürünleri filtreleme fonksiyonu
function filterProducts() {
  const categoryFilters = document.querySelectorAll('input[name="category"]:checked');
  const contentFilters = document.querySelectorAll('input[name="content"]:checked');

  const selectedCategories = Array.from(categoryFilters).map(input => input.value);
  const selectedContents = Array.from(contentFilters).map(input => input.value);

  const filteredProducts = products.filter(product => {
    const productContents = product.content; // Ürünün içeriği


    // Kategoriye göre filtreleme
    const hasSelectedCategory = selectedCategories.length === 0 ||
      selectedCategories.some(category => {
        if (category === 'gunes' && productContents.includes('alkol') && productContents.includes('retinol')) {
          return true;
        }
        if (category === 'nemlendirici' && productContents.includes('alkol') && productContents.includes('vitamin') && productContents.includes('asit')) {
          return true;
        }
        if (category === 'serum' && productContents.includes('vitamin') && productContents.includes('asit')) {
          return true;
        }
        return false;
      });

    // İçeriğe göre filtreleme
    const hasSelectedContent = selectedContents.length === 0 ||
      selectedContents.every(content => {
        return productContents.includes(content);
      });

    return hasSelectedCategory && hasSelectedContent;
  });

  displayProducts(filteredProducts);

}


function displayProducts(products) {
  const productGrid = document.querySelector('.product-grid');
  productGrid.innerHTML = '';

  if (products.length === 0) {
    productGrid.innerHTML = "<p>Ürün bulunamadı.</p>";
    return;
  }

  products.forEach(product => {
    const card = document.createElement('div');
    card.classList.add('product-card');

    const image = document.createElement('img');
    image.src = product.image;
    image.alt = product.name;

    const productName = document.createElement('h3');
    productName.textContent = product.name;

    const description = document.createElement('p');
    description.textContent = product.description;

    const linkButton = document.createElement('button');
    linkButton.textContent = "Ürüne Git";
    // Ürünün gerçek bir linki olması durumunda aşağıdaki satırı kullanabilirsin
    linkButton.onclick = () => window.location.href = product.url;

    card.appendChild(image);
    card.appendChild(productName);
    card.appendChild(description);
    card.appendChild(linkButton);

    productGrid.appendChild(card);
  });
}