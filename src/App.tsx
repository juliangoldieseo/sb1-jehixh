import React, { useState } from 'react';
import { 
  Wand2, 
  X,
  ChevronDown,
  ChevronUp,
  Calendar,
  ArrowRight
} from 'lucide-react';

function App() {
  const [keywords1, setKeywords1] = useState('');
  const [keywords2, setKeywords2] = useState('');
  const [result, setResult] = useState<string[]>([]);
  const [showModal, setShowModal] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const combineKeywords = () => {
    const list1 = keywords1.split('\n').filter(k => k.trim());
    const list2 = keywords2.split('\n').filter(k => k.trim());
    
    const combinations = list1.flatMap(k1 => 
      list2.map(k2 => `${k1.trim()} ${k2.trim()}`)
    );
    
    setResult(combinations);
  };

  const faqs = [
    {
      q: "What is the Keyword Combiner Tool?",
      a: "My Keyword Combiner Tool helps you create combinations of keywords by mixing two lists of words. It's perfect for SEO and content planning, helping you discover new keyword opportunities."
    },
    {
      q: "How do I use the Keyword Combiner Tool?",
      a: "Simply paste your first list of keywords in the left box and your second list in the right box. Each keyword should be on a new line. Click 'Combine Keywords' and you'll get all possible combinations!"
    },
    {
      q: "Why should I combine keywords?",
      a: "Combining keywords helps you find long-tail keyword opportunities that your competitors might miss. It's a strategy I use with my clients to uncover hidden SEO opportunities."
    },
    {
      q: "Can I export the combined keywords?",
      a: "Yes! You can easily copy all the combined keywords from the results box and paste them into your favorite SEO tool or spreadsheet."
    }
  ];

  const CTAButton = () => (
    <a
      href="https://go.juliangoldie.com/strategy-session"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
    >
      Book Your Free SEO Strategy Session <ArrowRight className="ml-2 h-5 w-5" />
    </a>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 max-w-md w-full relative">
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="text-center">
              <Calendar className="h-12 w-12 mx-auto mb-4 text-blue-600" />
              <h2 className="text-2xl font-bold mb-3">Want to 10x Your SEO Results?</h2>
              <p className="mb-6 text-gray-600">Book a free SEO strategy session with me, Julian Goldie, and let's unlock your website's true potential!</p>
              <CTAButton />
            </div>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <CTAButton />
          </div>
          <h1 className="text-4xl font-bold mb-4">Free Keyword Combiner Tool</h1>
          <p className="text-xl text-gray-600 mb-8">
            Hi! I'm Julian Goldie, and I've created this Keyword Combiner Tool to help you discover powerful keyword combinations for your SEO strategy.
          </p>
        </div>

        {/* Tool */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                First List of Keywords
              </label>
              <textarea
                className="w-full h-40 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter keywords (one per line)"
                value={keywords1}
                onChange={(e) => setKeywords1(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Second List of Keywords
              </label>
              <textarea
                className="w-full h-40 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter keywords (one per line)"
                value={keywords2}
                onChange={(e) => setKeywords2(e.target.value)}
              />
            </div>
          </div>
          <button
            onClick={combineKeywords}
            className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
          >
            <Wand2 className="mr-2 h-5 w-5" />
            Combine Keywords
          </button>
          {result.length > 0 && (
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Combined Keywords ({result.length} combinations)
              </label>
              <textarea
                className="w-full h-40 p-3 border rounded-lg"
                readOnly
                value={result.join('\n')}
              />
            </div>
          )}
        </div>

        {/* How to Use */}
        <div className="prose max-w-none mb-12">
          <h2 className="text-3xl font-bold mb-6">How to Use the Keyword Combiner Tool</h2>
          <p className="text-lg text-gray-700 mb-4">
            Using my Keyword Combiner Tool is super easy! Here's how you can get started:
          </p>
          <ol className="list-decimal pl-6 space-y-4 text-gray-700">
            <li>Put your first list of keywords in the left box (one keyword per line)</li>
            <li>Add your second list of keywords in the right box (one keyword per line)</li>
            <li>Click the "Combine Keywords" button</li>
            <li>Copy your new keyword combinations from the results box</li>
          </ol>
        </div>

        {/* FAQs */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border rounded-lg">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-semibold">{faq.q}</span>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 py-4 bg-gray-50">
                    <p className="text-gray-700">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-blue-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-4">Ready to Take Your SEO to the Next Level?</h2>
          <p className="text-lg text-gray-600 mb-6">
            Let's work together to create an SEO strategy that drives real results for your business.
          </p>
          <CTAButton />
        </div>
      </div>
    </div>
  );
}

export default App;