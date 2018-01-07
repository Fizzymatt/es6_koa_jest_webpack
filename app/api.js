import KoaRouter from 'koa-router';

const router = KoaRouter();

router.get('/',
    async (ctx, next) => {
        ctx.body = {
            data: 7
        };
    });


export default router;
