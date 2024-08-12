console.clear();

const bookmark = document.querySelector('[data-js="bookmark1"]');
const questionInput = document.querySelector('[data-js="questionInput"]');
const answerInput = document.querySelector('[data-js="answerInput"]');
const charsLeft1 = document.querySelector('[data-js="charsLeft1"]');
const charsLeft2 = document.querySelector('[data-js="charsLeft2"]');

// ---------------------------------------------------------------------------

// characters left

function updateCharCount(inputSource, outputElement) {
  const inputLength = inputSource.value.length;
  const maxLength = inputSource.maxLength;
  const charsLeft = maxLength - inputLength;
  outputElement.textContent = `${charsLeft} characters left`;
}

questionInput.addEventListener("input", () => {
  updateCharCount(questionInput, charsLeft1);
});

answerInput.addEventListener("input", () => {
  updateCharCount(answerInput, charsLeft2);
});

// ---------------------------------------------------------------------------

// add new card

// ---------------------------------------------------------------------------
