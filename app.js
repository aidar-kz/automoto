const rootURL = "https://jse-211.herokuapp.com";

const app = Vue.createApp({
  data() {
    return {
      brand: "",
      model: "",
      image: "",
      textOpacityClass: "",
      imageTransformClass: "",
    };
  },
  methods: {
    async getRandom() {
      this.textOpacityClass = "opacity-0 duration-500";
      this.imageOpacityClass = "opacity-0 delay-500 duration-500";

      const res = await fetch(rootURL + "/api/cars");
      const data = await res.json();
      setTimeout(() => {
        this.brand = data.brand;
        this.model = data.model;
        this.image = `${rootURL}/images/cars/${data.image}`;
        this.imageTransformClass = "scale-100";
        setTimeout(() => {
          this.imageOpacityClass = "opacity-100 delay-1000 duration-1000";
          this.textOpacityClass = "opacity-100 duration-[2000ms]";
          this.imageTransformClass = "scale-110 duration-[20000ms]";
        }, 500);
      }, 1000);
    },
  },
  beforeMount() {
    this.getRandom();
    setInterval(this.getRandom, 10000);
  },
});

app.mount("#app");
