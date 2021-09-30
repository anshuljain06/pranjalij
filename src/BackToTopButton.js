import $ from 'jquery';

function BackToTopButton() {

  function OnBackToTopClick(event) {
    event.preventDefault();
    $('html, body').animate({scrollTop: 0}, 1000, 'linear');
  }

  return (
    <div>
      <a href="#" class="btn back-to-top" onClick={OnBackToTopClick}>
        <i class="fa fa-chevron-up"></i>
      </a>
    </div>
  );
}

export default BackToTopButton;
