export function scroll() {
  window.sr = ScrollReveal({reset: true})

  ScrollReveal().reveal('header',{
    delay: 100,
    rotate: {
      x: 100,
      y: 0,
      z: 0
    }
  })

  ScrollReveal().reveal('.hello',{
    delay: 100,
    rotate: {
      x: 100,
      y: 0,
      z: 0
    }
  })
  ScrollReveal().reveal('.card',{
    delay: 200,
    rotate: {
      x: 100,
      y: 0,
      z: 0
    }
  })
  ScrollReveal().reveal('.cardCheck',{
    delay: 200,
    rotate: {
      x: 100,
      y: 0,
      z: 0
    }
  })
  ScrollReveal().reveal('.acting',{
    delay: 200,
    rotate: {
      x: 100,
      y: 0,
      z: 0
    }
  })
  ScrollReveal().reveal('.service',{
    delay: 200,
    rotate: {
      x: 100,
      y: 0,
      z: 0
    }
  })
}