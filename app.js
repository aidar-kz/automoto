const rootURL = 'https://jse-211.herokuapp.com'

const app = Vue.createApp({
  data() {
    return {
      brand: '',
      model: '',
      image: '',
      imageOpacityClass: '',
      imageTransformClass: '',
    }
  },
  methods: {
    async getRandom() {
      this.imageOpacityClass = 'opacity-0 duration-[500ms]'
      this.textOpacityClass = 'opacity-0'

      const res = await fetch(rootURL + '/api/cars')
      const data = await res.json()

      setTimeout(() => {
        this.imageTransformClass = 'scale-100'

        this.brand = data.brand
        this.model = data.model
        this.image = `${rootURL}/images/cars/${data.image}`
        this.textOpacityClass = 'opacity-100'

        setTimeout(() => {
          this.imageOpacityClass = 'opacity-100 duration-[2000ms]'
          this.imageTransformClass = 'scale-110 duration-[20000ms]'
        }, 1000)
      }, 1000)
    }
  },
  beforeMount() {
    this.getRandom()
    setInterval(this.getRandom, 20000)
  }
})

app.mount('#app')