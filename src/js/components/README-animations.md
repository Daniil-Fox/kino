# Компонент ScrollAnimation

Универсальный компонент для анимации элементов при скролле.

## Использование

### HTML структура:

```html
<!-- Простая анимация fade-in -->
<div data-animate="fade-in">Элемент с анимацией</div>

<!-- Анимация с задержкой -->
<div data-animate="slide-up" data-delay="200">Элемент с задержкой 200ms</div>

<!-- Анимация slide-left -->
<div data-animate="slide-left" data-delay="400">Элемент сдвигается слева</div>
```

### Доступные типы анимаций:

1. **fade-in** - появление с масштабированием

   - Начальное состояние: `opacity: 0, transform: scale(0.8)`
   - Конечное состояние: `opacity: 1, transform: scale(1)`

2. **slide-up** - появление снизу вверх

   - Начальное состояние: `opacity: 0, transform: translateY(50px)`
   - Конечное состояние: `opacity: 1, transform: translateY(0)`

3. **slide-left** - появление справа налево

   - Начальное состояние: `opacity: 0, transform: translateX(50px)`
   - Конечное состояние: `opacity: 1, transform: translateX(0)`

4. **slide-right** - появление слева направо
   - Начальное состояние: `opacity: 0, transform: translateX(-50px)`
   - Конечное состояние: `opacity: 1, transform: translateX(0)`

### Атрибуты:

- `data-animate` - тип анимации (обязательный)
- `data-delay` - задержка в миллисекундах (необязательный, по умолчанию 0)

### Настройки Intersection Observer:

- `threshold: 0.2` - элемент считается видимым, если 20% его площади видно
- `rootMargin: '50px'` - небольшой запас для плавности

### Примеры использования:

```html
<!-- Анимация для изображений в секции ready -->
<img src="image1.jpg" data-animate="fade-in" data-delay="0" />
<img src="image2.jpg" data-animate="fade-in" data-delay="200" />
<img src="image3.jpg" data-animate="fade-in" data-delay="400" />

<!-- Анимация для текстовых блоков -->
<h2 data-animate="slide-up">Заголовок</h2>
<p data-animate="slide-up" data-delay="200">Описание</p>

<!-- Анимация для карточек -->
<div class="card" data-animate="slide-left" data-delay="100">Карточка 1</div>
<div class="card" data-animate="slide-left" data-delay="200">Карточка 2</div>
<div class="card" data-animate="slide-left" data-delay="300">Карточка 3</div>
```

## Автоматическая инициализация

Компонент автоматически инициализируется при загрузке DOM и находит все элементы с атрибутом `data-animate`.
