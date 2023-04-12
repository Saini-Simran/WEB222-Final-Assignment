const loadReviews = () => {
	const { reviews } = window;
    const reviewsContainer = document.querySelector('.reviews__container');
    reviewsContainer.innerHTML = '';
	reviews.forEach((review) => {
        const reviewElement = document.createElement('div');
        
		reviewElement.classList.add('review');
		reviewElement.innerHTML = `
       
            <h4>${review.name}</h4>
            <div class="stars">
                ${new Array(review.reviews)
									.fill(
										`<svg viewBox="0 0 511.987 511">
                    <path
                        fill="#fed047"
                        d="M510.652 185.902a27.158 27.158 0 0 0-23.425-18.71l-147.774-13.419-58.433-136.77C276.71 6.98 266.898.494 255.996.494s-20.715 6.487-25.023 16.534l-58.434 136.746-147.797 13.418A27.208 27.208 0 0 0 1.34 185.902c-3.371 10.368-.258 21.739 7.957 28.907l111.7 97.96-32.938 145.09c-2.41 10.668 1.73 21.696 10.582 28.094 4.757 3.438 10.324 5.188 15.937 5.188 4.84 0 9.64-1.305 13.95-3.883l127.468-76.184 127.422 76.184c9.324 5.61 21.078 5.097 29.91-1.305a27.223 27.223 0 0 0 10.582-28.094l-32.937-145.09 111.699-97.94a27.224 27.224 0 0 0 7.98-28.927zm0 0"
                    ></path>
                </svg>`,
									)
									.join('')}
            </div>
            <span>${review.date}</span>
            <p>
               ${review.content}
            </p>
       
           `;
        reviewsContainer.appendChild(reviewElement);
	});
};

loadReviews();


const btn = document.querySelector('.btn');

btn.addEventListener('click', () => { 
    const nameInput = document.querySelector('#name');
    const contentInput = document.querySelector('#review');
    const ratingInput = document.querySelector('#rating');

    const name = nameInput.value;
    const content = contentInput.value;
    const rating = Number(ratingInput.value);
    console.log(name, content, rating);
    if (name === '' || content === '' || rating === '') { 
        alert('Please fill all the fields');
        return;
    }
    const { reviews } = window;
    const newReview = {
        name,
        content,
        reviews:rating,
        date: `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`,
    }
    reviews.push(newReview);
    nameInput.value = '';
    contentInput.value = 'Your Review';
    ratingInput.value = '1';
    loadReviews();
})

