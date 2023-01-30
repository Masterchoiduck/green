window.addEventListener('scroll', (e) => { 
    // console.log(window.scrollY);
    if (window.scrollY>100) {
      console.log('변하기');
    }
    if (window.scrollY<100) {
      console.log('안변하기');
    }
  });