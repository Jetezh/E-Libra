// Scroll Header

function scrollHeader() {
    const Header = document.getElementById('header');

    if(this.scrollY >= 50) {
        Header.classList.add('scrollHeader');
    } else {
        Header.classList.remove('scrollHeader');
    }
}

window.addEventListener('scroll', scrollHeader);

// books slider

const slideButton = document.querySelectorAll('.slideButton');
const bookList = document.querySelector('.booksSlider');

const slider = () => {
    slideButton.forEach(button =>  {
        button.addEventListener('click', () => {
            const direction = button.id === 'prevSlide' ? -1 : 1;
            const scrollAmount = bookList.clientWidth * direction;
            bookList.scrollBy({
                left: scrollAmount, behavior: 'smooth'
            })
        })
    })

}

window.addEventListener('load', slider)

