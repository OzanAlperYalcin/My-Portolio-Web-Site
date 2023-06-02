import Social from "./Social"

function Footer() {
  return (
    <footer className="mt-auto">
      <div className='flex justify-between items-center mt-10 py-4 px-8 border-t border-white/20 mb-auto'>
        <span className='text-xs text-gray-400'>Ozan Alper Yalçın - Frontend Developer</span>
        <Social size={18} />
      </div>
    </footer>
  )
}

export default Footer