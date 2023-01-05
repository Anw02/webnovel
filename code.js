const stories = document.querySelectorAll('.story');

stories.forEach(story => {
  story.addEventListener('click', () => {
    // Show the story
  });
});

const storyContent = document.getElementById('story-content');

function showStory() {
  storyContent.style.display = 'flex';
}

function hideStory() {
  storyContent.style.display = 'none';
}

// Toggle the visibility of the story content when a story is clicked
stories.forEach(story => {
  story.addEventListener('click', () =>