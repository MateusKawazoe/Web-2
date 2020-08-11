$(document).ready(function() {
    $('.botao').on('click', async function() {
        $(".imagem").attr('src', "https://flevix.com/wp-content/uploads/2019/07/Curve-Loading.gif")
        const response = await axios.get('https://api.thecatapi.com/v1/images/search')
        $(".imagem").attr('src', response.data[0].url)
    })
})
