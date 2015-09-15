    <script>
      $("#click-card").click(function() {
        $( "#card-load" ).load( "cards.html" );
                $( document ).click(function() {
          $( ".black-background" ).fadeOut(); 
        });
      });
    </script>