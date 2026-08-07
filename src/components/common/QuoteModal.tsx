import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Calculator, ArrowRight, ShieldCheck, Clock, Send } from 'lucide-react';
import { SERVICE_CATEGORIES } from '../../data/mockData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategoryId?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, initialCategoryId }) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedCategory, setSelectedCategory] = useState(initialCategoryId || 'architecture');
  const [projectType, setProjectType] = useState<'residential' | 'commercial' | 'industrial' | 'estate'>('residential');
  const [projectSize, setProjectSize] = useState('5,000 - 10,000 sq ft');
  const [urgency, setUrgency] = useState('Immediate (Within 1 Month)');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const currentCategoryObj = SERVICE_CATEGORIES.find(c => c.id === selectedCategory) || SERVICE_CATEGORIES[0];

  // Dynamic estimate calculation logic based on category and size
  const calculateEstimate = () => {
    let base = 15000;
    if (selectedCategory === 'construction') base = 85000;
    if (selectedCategory === 'architecture') base = 25000;
    if (selectedCategory === 'solar') base = 18000;
    if (selectedCategory === 'cctv-security') base = 8500;
    if (selectedCategory === 'interior-design') base = 20000;

    let multiplier = 1;
    if (projectType === 'commercial') multiplier = 1.8;
    if (projectType === 'industrial') multiplier = 2.4;
    if (projectType === 'estate') multiplier = 3.2;

    const min = Math.round(base * multiplier);
    const max = Math.round(min * 1.6);
    return `$${min.toLocaleString()} - $${max.toLocaleString()}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="w-full max-w-2xl bg-[#FAF8F5] border border-[#E2DDD5] rounded-2xl shadow-2xl overflow-hidden my-8"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-[#E2DDD5] bg-[#F5F2ED]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#5A5A40]/10 border border-[#5A5A40]/30 flex items-center justify-center text-[#5A5A40]">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1A1A1A] font-serif-title">Get Priority Quotation</h3>
                <p className="text-xs text-[#68665E]">Instantly calculated estimation & verified partner match</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-[#68665E] hover:text-[#1A1A1A] hover:bg-[#5A5A40]/10 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {submitted ? (
            <div className="p-8 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-[#1A1A1A] font-serif-title">Quotation Request Received!</h4>
                <p className="text-sm text-[#68665E] mt-2 max-w-md mx-auto">
                  Thank you, <span className="text-[#5A5A40] font-semibold">{name}</span>. Reference code{' '}
                  <span className="font-mono text-[#5A5A40] bg-[#5A5A40]/10 px-2 py-0.5 rounded border border-[#5A5A40]/20 font-bold">
                    PLB-{Math.floor(100000 + Math.random() * 900000)}
                  </span>
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F5F2ED] border border-[#E2DDD5] text-left space-y-2 text-xs text-[#1A1A1A]">
                <div className="flex justify-between">
                  <span className="text-[#68665E]">Selected Service:</span>
                  <span className="font-bold text-[#5A5A40]">{currentCategoryObj.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#68665E]">Estimated Scope Range:</span>
                  <span className="font-bold text-emerald-700">{calculateEstimate()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#68665E]">Guaranteed Response Time:</span>
                  <span className="font-bold text-[#1A1A1A]">Within 4 Business Hours</span>
                </div>
              </div>

              <p className="text-xs text-[#68665E]">
                A dedicated PLAN B Hive Account Director will reach out to schedule your 1-on-1 discovery session with matching verified partners.
              </p>

              <button
                onClick={resetForm}
                className="w-full py-3 rounded-xl bg-[#5A5A40] hover:bg-[#4A4A33] text-white font-bold transition-all shadow-md shadow-[#5A5A40]/20"
              >
                Close & Return to Browsing
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {/* Steps Indicator */}
              <div className="flex items-center justify-between px-2 text-xs font-semibold border-b border-[#E2DDD5] pb-4">
                <span className={`flex items-center gap-2 ${step >= 1 ? 'text-[#5A5A40]' : 'text-[#8A8678]'}`}>
                  <span className="w-6 h-6 rounded-full bg-[#5A5A40]/20 flex items-center justify-center border border-[#5A5A40]/40 font-bold text-[#5A5A40]">1</span>
                  Service & Scale
                </span>
                <span className={`flex items-center gap-2 ${step >= 2 ? 'text-[#5A5A40]' : 'text-[#8A8678]'}`}>
                  <span className="w-6 h-6 rounded-full bg-[#5A5A40]/20 flex items-center justify-center border border-[#5A5A40]/40 font-bold text-[#5A5A40]">2</span>
                  Scope Estimate
                </span>
                <span className={`flex items-center gap-2 ${step >= 3 ? 'text-[#5A5A40]' : 'text-[#8A8678]'}`}>
                  <span className="w-6 h-6 rounded-full bg-[#5A5A40]/20 flex items-center justify-center border border-[#5A5A40]/40 font-bold text-[#5A5A40]">3</span>
                  Contact & Submit
                </span>
              </div>

              {step === 1 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-[#1A1A1A] uppercase tracking-wider mb-2">
                      Select Service Domain
                    </label>
                    <select
                      value={selectedCategory}
                      onChange={e => setSelectedCategory(e.target.value)}
                      className="w-full bg-[#F5F2ED] border border-[#E2DDD5] rounded-xl px-4 py-3 text-[#1A1A1A] text-sm focus:outline-none focus:border-[#5A5A40]"
                    >
                      {SERVICE_CATEGORIES.map(c => (
                        <option key={c.id} value={c.id}>
                          {c.name} ({c.partnerCount} Verified Partners)
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1A1A1A] uppercase tracking-wider mb-2">
                      Project Type
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      {[
                        { id: 'residential', label: 'Residential' },
                        { id: 'commercial', label: 'Commercial' },
                        { id: 'industrial', label: 'Industrial' },
                        { id: 'estate', label: 'Mega Estate' }
                      ].map(t => (
                        <button
                          key={t.id}
                          type="button"
                          onClick={() => setProjectType(t.id as any)}
                          className={`py-2.5 px-3 rounded-xl border text-xs font-semibold transition-all ${
                            projectType === t.id
                              ? 'bg-[#5A5A40]/20 border-[#5A5A40] text-[#1A1A1A] font-bold'
                              : 'bg-[#F5F2ED] border-[#E2DDD5] text-[#68665E] hover:bg-[#5A5A40]/10'
                          }`}
                        >
                          {t.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1A1A1A] uppercase tracking-wider mb-2">
                      Estimated Property Scale
                    </label>
                    <select
                      value={projectSize}
                      onChange={e => setProjectSize(e.target.value)}
                      className="w-full bg-[#F5F2ED] border border-[#E2DDD5] rounded-xl px-4 py-3 text-[#1A1A1A] text-sm focus:outline-none focus:border-[#5A5A40]"
                    >
                      <option value="Under 2,500 sq ft">Under 2,500 sq ft</option>
                      <option value="2,500 - 5,000 sq ft">2,500 - 5,000 sq ft</option>
                      <option value="5,000 - 10,000 sq ft">5,000 - 10,000 sq ft</option>
                      <option value="10,000 - 50,000 sq ft">10,000 - 50,000 sq ft</option>
                      <option value="50,000+ sq ft (Commercial Complex)">50,000+ sq ft (Commercial Complex)</option>
                    </select>
                  </div>

                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-full py-3.5 rounded-xl bg-[#5A5A40] hover:bg-[#4A4A33] text-white font-bold transition-all flex items-center justify-center gap-2 mt-4"
                  >
                    Next: View Estimate <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-[#F5F2ED] border border-[#5A5A40]/30 text-center space-y-2">
                    <span className="text-xs uppercase tracking-widest text-[#5A5A40] font-bold">
                      Estimated Investment Range
                    </span>
                    <div className="text-3xl font-extrabold text-[#1A1A1A] tracking-tight font-serif-title">{calculateEstimate()}</div>
                    <p className="text-xs text-[#68665E]">
                      Based on current verified market rates across {currentCategoryObj.partnerCount} top-rated partner firms in The Hive.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1A1A1A] uppercase tracking-wider mb-2">
                      Target Execution Timeline
                    </label>
                    <select
                      value={urgency}
                      onChange={e => setUrgency(e.target.value)}
                      className="w-full bg-[#F5F2ED] border border-[#E2DDD5] rounded-xl px-4 py-3 text-[#1A1A1A] text-sm focus:outline-none focus:border-[#5A5A40]"
                    >
                      <option value="Immediate (Within 1 Month)">Immediate (Within 1 Month)</option>
                      <option value="1 - 3 Months">1 - 3 Months</option>
                      <option value="3 - 6 Months Planning">3 - 6 Months Planning</option>
                      <option value="Long Term / RFP Tender">Long Term / RFP Tender</option>
                    </select>
                  </div>

                  <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                    <p className="text-xs text-emerald-900">
                      <strong>Hive Escrow Protected:</strong> All contracts negotiated via PLAN B include milestone protection and unified warranty guarantees.
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="w-1/3 py-3 rounded-xl border border-[#E2DDD5] hover:bg-[#F5F2ED] text-[#1A1A1A] font-semibold transition-all"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="w-2/3 py-3 rounded-xl bg-[#5A5A40] hover:bg-[#4A4A33] text-white font-bold transition-all flex items-center justify-center gap-2"
                    >
                      Next: Enter Contact Info <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-[#1A1A1A] uppercase tracking-wider mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="e.g. Marcus Vance"
                        className="w-full bg-[#F5F2ED] border border-[#E2DDD5] rounded-xl px-4 py-2.5 text-[#1A1A1A] text-sm focus:outline-none focus:border-[#5A5A40]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#1A1A1A] uppercase tracking-wider mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="m.vance@company.com"
                        className="w-full bg-[#F5F2ED] border border-[#E2DDD5] rounded-xl px-4 py-2.5 text-[#1A1A1A] text-sm focus:outline-none focus:border-[#5A5A40]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-[#1A1A1A] uppercase tracking-wider mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        placeholder="+1 (555) 019-2834"
                        className="w-full bg-[#F5F2ED] border border-[#E2DDD5] rounded-xl px-4 py-2.5 text-[#1A1A1A] text-sm focus:outline-none focus:border-[#5A5A40]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#1A1A1A] uppercase tracking-wider mb-1">
                        City / Location
                      </label>
                      <input
                        type="text"
                        value={location}
                        onChange={e => setLocation(e.target.value)}
                        placeholder="e.g. Austin, TX or Beverly Hills"
                        className="w-full bg-[#F5F2ED] border border-[#E2DDD5] rounded-xl px-4 py-2.5 text-[#1A1A1A] text-sm focus:outline-none focus:border-[#5A5A40]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1A1A1A] uppercase tracking-wider mb-1">
                      Additional Notes / Requirements
                    </label>
                    <textarea
                      rows={2}
                      value={notes}
                      onChange={e => setNotes(e.target.value)}
                      placeholder="Specify special requirements, architectural preferences, or specific partner company requested..."
                      className="w-full bg-[#F5F2ED] border border-[#E2DDD5] rounded-xl px-4 py-2.5 text-[#1A1A1A] text-sm focus:outline-none focus:border-[#5A5A40] resize-none"
                    ></textarea>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="w-1/3 py-3 rounded-xl border border-[#E2DDD5] hover:bg-[#F5F2ED] text-[#1A1A1A] font-semibold transition-all"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="w-2/3 py-3 rounded-xl bg-[#5A5A40] hover:bg-[#4A4A33] text-white font-bold transition-all shadow-md shadow-[#5A5A40]/20 flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" /> Submit Quotation Enquiry
                    </button>
                  </div>
                </div>
              )}
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
