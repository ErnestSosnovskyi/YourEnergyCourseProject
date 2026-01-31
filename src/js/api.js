export class YourEnergyAPI {
  #BASE_URL = 'https://your-energy.b.goit.study/api';

  constructor() {
    this.page = 1;
    this.limit = 12;
  }

  // Отримання цитати дня
  async getQuote() {
    try {
      const response = await fetch(`${this.#BASE_URL}/quote`);
      if (!response.ok) {
        throw new Error(`Error fetching quote: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  // Отримання фільтрів (Muscles, Body parts, Equipment)
  async getFilters(filterName) {    
    const params = new URLSearchParams({
      filter: filterName,
      page: this.page,
      limit: this.limit,
    });

    try {
      const response = await fetch(`${this.#BASE_URL}/filters?${params}`);
      if (!response.ok) {
        throw new Error(`Error fetching filters: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  // Отримання вправ з фільтрацією
  async getExercises(filters = {}) {    
    const searchParams = new URLSearchParams({
      ...filters,
      page: this.page,
      limit: this.limit,
    });

    try {
      const response = await fetch(`${this.#BASE_URL}/exercises?${searchParams}`);
      if (!response.ok) {
        throw new Error(`Error fetching exercises: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  // Деталі вправи
  async getExerciseDetails(id) {
    try {
      const response = await fetch(`${this.#BASE_URL}/exercises/${id}`);
      if (!response.ok) {
        throw new Error(`Error fetching exercise details: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  // Рейтинг
  async updateRating(id, ratingData) {
    try {
      const response = await fetch(`${this.#BASE_URL}/exercises/${id}/rating`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(ratingData),
      });
      
      if (!response.ok) {
        throw new Error(`Error updating rating: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  // Підписка
  async subscribe(email) {
    try {
      const response = await fetch(`${this.#BASE_URL}/subscription`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        if (response.status === 409) {
            throw new Error('Email already subscribed');
        }
        throw new Error(`Error subscribing: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}