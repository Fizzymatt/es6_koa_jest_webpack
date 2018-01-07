import conditional from 'koa-conditional-get';
import etag from 'koa-etag';
import Koa from 'koa';
import helmet from 'koa-helmet';
import api from './api';
import bodyParser from 'koa-bodyparser';
import cors from 'kcors';

const app = new Koa()
    .use(helmet())
    .use(helmet.referrerPolicy({ policy: 'no-referrer' }))
    .use(cors())
    .use(async (ctx, next)  => {
        await next();
    })
    // etag works together with conditional-get
    .use(conditional())
    .use(etag())
    .use(bodyParser())
    .use(api.routes())
    .use(api.allowedMethods());


app.listen(process.env.PORT || 3000);
