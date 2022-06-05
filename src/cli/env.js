export const parseEnv = () => {
	Object.entries(process.env).forEach(([prop, value]) => {
	  if (prop.slice(0, 4) === 'RSS_') {
      console.log(`${prop}=${value};`);
      }
    });
  };

  parseEnv();