import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    ingredients: '',
    steps: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear the error for this field as the user types
    if (errors[name]) {
        setErrors({ ...errors, [name]: '' });
    }
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.title.trim()) {
      newErrors.title = 'Recipe Title is required.';
    }
    if (!formData.ingredients.trim()) {
      newErrors.ingredients = 'Ingredients list is required.';
    } else if (formData.ingredients.split('\n').filter(line => line.trim() !== '').length < 2) {
      // Custom validation: check if there are at least two items (separated by new lines)
      newErrors.ingredients = 'Please list at least two ingredients.';
    }
    if (!formData.steps.trim()) {
      newErrors.steps = 'Preparation Steps are required.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form Submitted Successfully:', formData);
      setIsSubmitted(true);
      // Optional: Clear form data after successful submission
      // setFormData({ title: '', ingredients: '', steps: '' });
    } else {
      console.log('Validation failed.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-start justify-center py-10">
      <div className="bg-white p-6 md:p-10 shadow-2xl rounded-lg w-full max-w-lg">
        
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Share Your Recipe! 🍽️
        </h2>
        
        {isSubmitted ? (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative text-center">
                Recipe successfully prepared for sharing!
                <button onClick={() => setIsSubmitted(false)} className="mt-2 text-sm underline block mx-auto">
                    Add another recipe
                </button>
            </div>
        ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* 1. Recipe Title Input */}
                <div className="flex flex-col">
                    <label htmlFor="title" className="mb-2 font-semibold text-gray-700">Recipe Title</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className={`p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-150 ${errors.title ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder="e.g., Simple Chicken Stir Fry"
                    />
                    {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
                </div>

                {/* 2. Ingredients Textarea */}
                <div className="flex flex-col">
                    <label htmlFor="ingredients" className="mb-2 font-semibold text-gray-700">Ingredients (One item per line)</label>
                    <textarea
                        name="ingredients"
                        value={formData.ingredients}
                        onChange={handleChange}
                        rows="5"
                        className={`p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-150 ${errors.ingredients ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder="e.g., 2 large chicken breasts&#10;1 tbsp olive oil&#10;1 cup mixed vegetables"
                    ></textarea>
                    {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
                </div>

                {/* 3. Preparation Steps Textarea */}
                <div className="flex flex-col">
                    <label htmlFor="steps" className="mb-2 font-semibold text-gray-700">Cooking Instructions</label>
                    <textarea
                        name="steps"
                        value={formData.steps}
                        onChange={handleChange}
                        rows="7"
                        className={`p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-150 ${errors.steps ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder="Step 1: Preheat oven to 400°F.&#10;Step 2: Mix all dry ingredients..."
                    ></textarea>
                    {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg shadow-lg 
                               hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                    Submit Recipe
                </button>

            </form>
        )}
      </div>
    </div>
  );
};

export default AddRecipeForm;