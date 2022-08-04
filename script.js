$('#basic-addon2').on('click', function () {
  $('#hero-list').html(' ');
  $.ajax({
    url: 'https://indonesia-public-static-api.vercel.app/api/heroes',
    type: 'get',
    typeData: 'json',
    data: {
      name: $('#search-input').val(),
    },
    success: function (result) {
      result.forEach((e) => {
        $('#hero-list').append(
          `<div class="card text-center"><div class="card-header"><h2>` +
            e.name +
            `</h2>
                    </div>
                    <div class="card-body">
                        <p>Tahun Lahir :` +
            e.birth_year +
            `</p>
                        <p>Tahun Meninggal :` +
            e.death_year +
            `</p>
                        <em>` +
            e.description +
            `</em>
                    </div>
                    <div class="card-footer text-muted">
                        ~Terima Kasih Atas Perjuangan Mu Pahlawanku~
                    </div>    
                    </div>`
        );
      });
      $('#search-input').val('');
    },
  });
});
