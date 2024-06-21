function toggleCategory(categoryId) {
    const categories = document.querySelectorAll('.category-content');
  
    categories.forEach(category => {
      category.style.display = 'none';
    });
  
    categories.forEach(div => {
      div.classList.remove('active');
    });
  
    const selectedCategory = document.getElementById(categoryId);
    if (selectedCategory) {
      selectedCategory.style.display = 'block';
    }
  
    categories.classList.add('active');
  }
  toggleCategory('all');