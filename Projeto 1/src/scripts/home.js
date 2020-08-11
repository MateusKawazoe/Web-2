$(document).ready(function() {
    $('.botao').on('click', async function() {
        const response = await axios.get('https://api.thecatapi.com/v1/images/search')
        $(".imagem").attr('src', response.data[0].url)
    })
})