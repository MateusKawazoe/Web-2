$(document).ready(function() {
    $('.botao').on('click', async function() {
        $(".imagem").attr('src', "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6d391369321565.5b7d0d570e829.gif")
        const response = await axios.get('https://api.thecatapi.com/v1/images/search')
        $(".imagem").attr('src', response.data[0].url)
    })
})
