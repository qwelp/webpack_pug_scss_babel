module.exports = api => {
  const isProd = api.cache(() => process.env.NODE_ENV === 'production')

  return {
    plugins: [
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-proposal-class-properties'
    ],
    presets: [
      [
        '@babel/preset-env',
        {
          modules: false,
          targets: {
            esmodules: !isProd
          }
        }
      ]
    ]
  }
}
