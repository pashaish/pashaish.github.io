import jss from 'jss';
import jssPreset from 'jss-preset-default';
import camelCase from 'jss-plugin-camel-case';
import nested from 'jss-plugin-nested';
import prefixer from 'jss-plugin-vendor-prefixer';

jss.setup(jssPreset());
jss.use(camelCase());
jss.use(nested());
jss.use(prefixer());
