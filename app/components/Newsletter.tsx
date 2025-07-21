'use client'
// In the App Router, all components are Server Components by default.
// Event handlers like onClick, onSubmit, etc., require client-side JS — so they must be used in Client Components only.

export default function Newsletter() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(e)
    // Add your submit logic here
  }
  return (
    <div className='mt-12 text-center'>
      <h2 className='text-2xl font-bold mb-4'>Stay Updated</h2>
      <p className='text-gray-600 dark:text-gray-300 mb-6'>
        Subscribe to our newsletter for the latest articles and updates
      </p>
      <form className='max-w-md mx-auto flex gap-4' onSubmit={onSubmit}>
        <input
          type='email'
          placeholder='Enter your email'
          className='flex-1 px-4 py-2 text-black rounded-lg border focus:ring-2 focus:ring-purple-500 focus:border-transparent'
        />
        <button
          type='submit'
          className='px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700'
        >
          Subscribe
        </button>
      </form>
    </div>
  )
}
