import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { FaQuestionCircle } from 'react-icons/fa';

const FAQ = () => {
  const isLoading = false; // Toggle this to simulate loading state

  return (
    <section className='bg-gray-100 py-12'>
      {/* Container */}
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header Section */}
        <div className='text-center mb-12'>
          {isLoading ? (
            <Skeleton height={40} width={300} className='mx-auto mb-4' />
          ) : (
            <h1 className='text-3xl font-bold text-gray-800 mb-4'>
              Frequently Asked Questions
            </h1>
          )}
          {isLoading ? (
            <Skeleton height={20} width={500} className='mx-auto' />
          ) : (
            <p className='text-lg text-gray-600'>
              Find answers to common questions about our hospital services, appointment scheduling, billing, and more.
            </p>
          )}
        </div>

        {/* FAQ Sections */}
        <div className='space-y-12'>
          {/* General Information */}
          <div>
            {isLoading ? (
              <Skeleton height={30} width={200} className='mb-4' />
            ) : (
              <h2 className='text-2xl font-semibold text-gray-800 mb-6'>
                General Information
              </h2>
            )}
            <div className='space-y-6'>
              {[
                { question: 'What are the hospital’s operating hours?', answer: 'Our hospital operates 24/7.' },
                { question: 'How can I contact the hospital?', answer: 'You can contact us via phone at (123) 456-7890 or email at info@hospital.com.' },
                { question: 'Where is the hospital located?', answer: 'We are located at 123 Main Street, City, State, ZIP.' },
                { question: 'What services does the hospital offer?', answer: 'We offer a range of services including emergency care, inpatient and outpatient services, and specialized treatments.' },
              ].map((item, index) => (
                <div key={index} className='flex items-start space-x-3'>
                  {isLoading ? (
                    <Skeleton circle height={24} width={24} className='mt-1' />
                  ) : (
                    <FaQuestionCircle className='text-blue-500 text-xl' />
                  )}
                  <div className='text-gray-700'>
                    <p className='font-semibold'>{isLoading ? <Skeleton height={20} width={300} /> : item.question}</p>
                    <p>{isLoading ? <Skeleton height={20} width={300} /> : item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Appointment Scheduling */}
          <div>
            {isLoading ? (
              <Skeleton height={30} width={200} className='mb-4' />
            ) : (
              <h2 className='text-2xl font-semibold text-gray-800 mb-6'>
                Appointment Scheduling
              </h2>
            )}
            <div className='space-y-6'>
              {[
                { question: 'How can I schedule an appointment?', answer: 'You can schedule an appointment by calling us or using our online booking system.' },
                { question: 'What should I do if I need to cancel or reschedule my appointment?', answer: 'Please call us as soon as possible to cancel or reschedule your appointment.' },
                { question: 'Can I book an appointment online?', answer: 'Yes, you can book an appointment online through our website.' },
                { question: 'How can I find out if my appointment is confirmed?', answer: 'You will receive a confirmation email or text message once your appointment is scheduled.' },
              ].map((item, index) => (
                <div key={index} className='flex items-start space-x-3'>
                  {isLoading ? (
                    <Skeleton circle height={24} width={24} className='mt-1' />
                  ) : (
                    <FaQuestionCircle className='text-blue-500 text-xl' />
                  )}
                  <div className='text-gray-700'>
                    <p className='font-semibold'>{isLoading ? <Skeleton height={20} width={300} /> : item.question}</p>
                    <p>{isLoading ? <Skeleton height={20} width={300} /> : item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Insurance and Billing */}
          <div>
            {isLoading ? (
              <Skeleton height={30} width={200} className='mb-4' />
            ) : (
              <h2 className='text-2xl font-semibold text-gray-800 mb-6'>
                Insurance and Billing
              </h2>
            )}
            <div className='space-y-6'>
              {[
                { question: 'What insurance plans do you accept?', answer: 'We accept most major insurance plans. Please contact us for specific details.' },
                { question: 'How can I check my insurance coverage?', answer: 'You can contact your insurance provider or our billing department for coverage details.' },
                { question: 'How can I pay my hospital bill?', answer: 'Bills can be paid online, by mail, or in person at the hospital.' },
                { question: 'What financial assistance is available?', answer: 'We offer financial assistance programs for eligible patients. Please contact our financial services department for more information.' },
              ].map((item, index) => (
                <div key={index} className='flex items-start space-x-3'>
                  {isLoading ? (
                    <Skeleton circle height={24} width={24} className='mt-1' />
                  ) : (
                    <FaQuestionCircle className='text-blue-500 text-xl' />
                  )}
                  <div className='text-gray-700'>
                    <p className='font-semibold'>{isLoading ? <Skeleton height={20} width={300} /> : item.question}</p>
                    <p>{isLoading ? <Skeleton height={20} width={300} /> : item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Patient Information */}
          <div>
            {isLoading ? (
              <Skeleton height={30} width={200} className='mb-4' />
            ) : (
              <h2 className='text-2xl font-semibold text-gray-800 mb-6'>
                Patient Information
              </h2>
            )}
            <div className='space-y-6'>
              {[
                { question: 'What should I bring to my appointment?', answer: 'Please bring your ID, insurance card, and any relevant medical records.' },
                { question: 'How can I access my medical records?', answer: 'You can request your medical records through our patient portal or by contacting our medical records department.' },
                { question: 'How can I update my personal information?', answer: 'You can update your personal information through our patient portal or by contacting our administrative office.' },
                { question: 'What is the hospital’s policy on patient privacy?', answer: 'We adhere to strict privacy policies to protect your personal and medical information.' },
              ].map((item, index) => (
                <div key={index} className='flex items-start space-x-3'>
                  {isLoading ? (
                    <Skeleton circle height={24} width={24} className='mt-1' />
                  ) : (
                    <FaQuestionCircle className='text-blue-500 text-xl' />
                  )}
                  <div className='text-gray-700'>
                    <p className='font-semibold'>{isLoading ? <Skeleton height={20} width={300} /> : item.question}</p>
                    <p>{isLoading ? <Skeleton height={20} width={300} /> : item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Emergency Services */}
          <div>
            {isLoading ? (
              <Skeleton height={30} width={200} className='mb-4' />
            ) : (
              <h2 className='text-2xl font-semibold text-gray-800 mb-6'>
                Emergency Services
              </h2>
            )}
            <div className='space-y-6'>
              {[
                { question: 'What should I do in case of a medical emergency?', answer: 'Call 911 or go to the nearest emergency room immediately.' },
                { question: 'What is the emergency room’s location?', answer: 'The emergency room is located on the ground floor of the hospital building.' },
                { question: 'How do I know if I need to go to the emergency room?', answer: 'If you are experiencing severe symptoms or life-threatening conditions, go to the emergency room.' },
              ].map((item, index) => (
                <div key={index} className='flex items-start space-x-3'>
                  {isLoading ? (
                    <Skeleton circle height={24} width={24} className='mt-1' />
                  ) : (
                    <FaQuestionCircle className='text-blue-500 text-xl' />
                  )}
                  <div className='text-gray-700'>
                    <p className='font-semibold'>{isLoading ? <Skeleton height={20} width={300} /> : item.question}</p>
                    <p>{isLoading ? <Skeleton height={20} width={300} /> : item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hospital Policies */}
          <div>
            {isLoading ? (
              <Skeleton height={30} width={200} className='mb-4' />
            ) : (
              <h2 className='text-2xl font-semibold text-gray-800 mb-6'>
                Hospital Policies
              </h2>
            )}
            <div className='space-y-6'>
              {[
                { question: 'What is the hospital’s policy on smoking?', answer: 'Smoking is not allowed on hospital premises.' },
                { question: 'Can I use my mobile phone in the hospital?', answer: 'Mobile phones are permitted in designated areas. Please be respectful of others.' },
                { question: 'What are the rules regarding patient dress code?', answer: 'Patients are encouraged to wear comfortable clothing during their stay.' },
              ].map((item, index) => (
                <div key={index} className='flex items-start space-x-3'>
                  {isLoading ? (
                    <Skeleton circle height={24} width={24} className='mt-1' />
                  ) : (
                    <FaQuestionCircle className='text-blue-500 text-xl' />
                  )}
                  <div className='text-gray-700'>
                    <p className='font-semibold'>{isLoading ? <Skeleton height={20} width={300} /> : item.question}</p>
                    <p>{isLoading ? <Skeleton height={20} width={300} /> : item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Special Services */}
          <div>
            {isLoading ? (
              <Skeleton height={30} width={200} className='mb-4' />
            ) : (
              <h2 className='text-2xl font-semibold text-gray-800 mb-6'>
                Special Services
              </h2>
            )}
            <div className='space-y-6'>
              {[
                { question: 'Does the hospital offer telemedicine services?', answer: 'Yes, we offer telemedicine services. Please contact us for more details.' },
                { question: 'Are there language services available for non-English speakers?', answer: 'Yes, we provide language interpretation services upon request.' },
                { question: 'What support services are available for patients with disabilities?', answer: 'We offer various support services, including accessible facilities and assistance with mobility.' },
              ].map((item, index) => (
                <div key={index} className='flex items-start space-x-3'>
                  {isLoading ? (
                    <Skeleton circle height={24} width={24} className='mt-1' />
                  ) : (
                    <FaQuestionCircle className='text-blue-500 text-xl' />
                  )}
                  <div className='text-gray-700'>
                    <p className='font-semibold'>{isLoading ? <Skeleton height={20} width={300} /> : item.question}</p>
                    <p>{isLoading ? <Skeleton height={20} width={300} /> : item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Feedback and Complaints */}
          <div>
            {isLoading ? (
              <Skeleton height={30} width={200} className='mb-4' />
            ) : (
              <h2 className='text-2xl font-semibold text-gray-800 mb-6'>
                Feedback and Complaints
              </h2>
            )}
            <div className='space-y-6'>
              {[
                { question: 'How can I provide feedback about my experience?', answer: 'You can provide feedback through our online form or by contacting our customer service.' },
                { question: 'What should I do if I have a complaint about my care?', answer: 'Please contact our patient relations department to file a complaint.' },
                { question: 'How are complaints handled by the hospital?', answer: 'Complaints are reviewed by our patient relations team and addressed in accordance with our policies.' },
              ].map((item, index) => (
                <div key={index} className='flex items-start space-x-3'>
                  {isLoading ? (
                    <Skeleton circle height={24} width={24} className='mt-1' />
                  ) : (
                    <FaQuestionCircle className='text-blue-500 text-xl' />
                  )}
                  <div className='text-gray-700'>
                    <p className='font-semibold'>{isLoading ? <Skeleton height={20} width={300} /> : item.question}</p>
                    <p>{isLoading ? <Skeleton height={20} width={300} /> : item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
