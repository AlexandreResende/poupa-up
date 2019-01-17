
import * as cors from "cors";

class CorsServices {
  private corsOptions: cors.CorsOptions = {
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
    credentials: true,
    methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
    origin: process.env.API_URL || "http://localhost:3001/",
    preflightContinue: false,
  };

  public getCorsOptions() {
    return this.corsOptions;
  }

  public appliedCorsOptions() {
    return cors(this.getCorsOptions());
  }
}

export default CorsServices;
