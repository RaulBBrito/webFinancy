import CONFIGDEV from "src/environments/Config/config.dev";
import CONFIGPRD from "src/environments/Config/config.prod";
import { Config } from "src/environments/Config/typeconfig";
import { environment } from "src/environments/environment";

class Configs {
  static getConfig(): Config {
    let env = environment.profile.toUpperCase();
    switch(env){
      case ('PRD'):
        return CONFIGPRD
      case ('DEV'):
        return CONFIGDEV
      default:
        return CONFIGPRD
    }
  }
}

export default Configs.getConfig();