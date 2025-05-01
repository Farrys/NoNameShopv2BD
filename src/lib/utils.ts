import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
}

export function calculateDiscount(price: number, discountPrice: number): number {
  return Math.round(((price - discountPrice) / price) * 100);
}

export function truncateText(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length) + '...';
}

export function getStarRating(rating: number): { full: number; half: number; empty: number } {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  
  return { full, half, empty };
}

export function generatePagination(currentPage: number, totalPages: number) {
  // If the total number of pages is less than 7, return all pages
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }
  
  // If current page is among the first 3 pages, show the first 3, ellipsis, and last 2
  if (currentPage <= 3) {
    return [1, 2, 3, 4, '...', totalPages - 1, totalPages];
  }
  
  // If current page is among the last 3 pages, show the first 2, ellipsis, and last 3
  if (currentPage >= totalPages - 2) {
    return [1, 2, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
  }
  
  // If current page is in the middle, show the first page, ellipsis, current page and its neighbors, ellipsis, and last page
  return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
}

export function getRandomSubset<T>(array: T[], size: number): T[] {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, size);
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}