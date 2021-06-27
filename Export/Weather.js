export class weather {
    constructor(d,e,v,a) {
      this.density = d;
      this.energy=e;
      this.windvelocity=v;
      this.area=a;
    }
  
    Windpower(d,e,v,a){
        return ( 0.5 * d * e * v * (a*a*a) );
    }
  }

