function typingEffect(element, index = 0) {
    const content = element.getAttribute("data-typing-content")
    const isDone = index > content.length
    if (!isDone) {
      element.textContent = content.substring(0, index)
      const charactersPerSecond = element.getAttribute("data-typing-characters-per-second")
      const timeoutDuration = 1000 / charactersPerSecond
      setTimeout(() => typingEffect(element, index + 1), timeoutDuration)
    }
  }
  
  function applyTypingEffectGlobally() {
    const elements = document.querySelectorAll("[data-typing-content]")
    for (const element of Array.from(elements))
      typingEffect(element)
  }
  
  applyTypingEffectGlobally()
  
  