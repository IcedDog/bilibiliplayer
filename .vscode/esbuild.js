import('esbuild').then(esbuild => {
    // 扩展
    esbuild.build(
        {
            entryPoints: [ // 入口脚本
                'src/video.ts'
            ],
            // target: "chrome76", // 目标标准
            bundle: true, // 是否打包
            // sourcemap: true, // map文件
            minify: true, // 是否压缩
            outdir: 'dist', // 输出目录
            outbase: "src", // 输入目录
            format: 'iife', // 输出格式
            treeShaking: true, // 清除无效代码
            // metafile: true, // 打印报表
            // charset: 'utf8', // 文件编码
            loader: { // 文件对应的解析方式
                '.html': 'text',
                '.svg': 'text',
                '.art': 'text',
                '.png': 'dataurl',
                '.gif': "dataurl",
                '.less': 'css',
                '.ttf': 'dataurl',
                '.woff': 'dataurl',
                '.eot': 'dataurl',
                '.xml': 'dataurl'
            }
        }
    ).catch(e => {
        console.error("编译出错！", e);
        process.exit(1);
    }).finally(() => {
        console.log("编译成功！");
    });
});