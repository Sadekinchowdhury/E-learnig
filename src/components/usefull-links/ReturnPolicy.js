import React from 'react'
import ReturnPolicyImg from '../../assects/images/return-policy.jpeg'

export default function ReturnPolicy() {
    return (
        <div>
            <div className='w-full bg-returnPolicy h-96 bg-no-repeat bg-cover'>
                <h2 className='text-center text-6xl text-white font-semibold pt-28'>Our Retun Policy</h2>
            </div>
            <div className='w-4/5 mx-auto p-5 border-8 border-red-100 bg-white'>
                <h1 className='text-3xl text-center mb-5'>
                    <span className='border-b-2 border-red-600'>Our Return Policy</span>
                </h1>
                <div>
                    <h2 className='text-xl font-semibold'>Introduction :</h2>
                    <ul className='ml-10'>
                        <li>
                            This section provides an overview of the purpose and scope of the Terms. You can include an image that represents your educational website, such as students studying or engaging with educational content.</li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-xl font-semibold'>User Eligibility :</h2>
                    <ul className='ml-10'>
                        <li>Specify the eligibility criteria for users to access and use your website. You can include a picture that represents your target audience, such as students or individuals engaged in learning activities.</li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-xl font-semibold'>User Accounts :</h2>
                    <ul className='ml-10'>
                        <li>Explain the process of creating user accounts and the importance of account credentials. You can use a picture to illustrate the steps involved in creating an account, such as filling out a registration form or setting up a profile picture.</li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-xl font-semibold'>Website Usage :</h2>
                    <ul className='ml-10'>
                        <li>Describe the permitted and prohibited uses of your website. You can include a picture that represents users engaging with various features of your website, such as watching video lessons, participating in discussions, or completing quizzes.</li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-xl font-semibold'>Intellectual Property :</h2>
                    <ul className='ml-10'>
                        <li>Specify the ownership rights of the content and materials available on your website. You can use a picture that symbolizes intellectual property, such as copyright or trademark symbols, to emphasize the importance of respecting intellectual property rights.</li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-xl font-semibold'>Payment and Refunds :</h2>
                    <ul className='ml-10'>
                        <li>If your website offers paid services or products, provide information about payment methods, pricing, and refund policies. You can include a picture that symbolizes payment and refunds, such as a shopping cart or a hand holding money.</li>
                    </ul>
                </div>

                <div>
                    <h2 className='text-xl font-semibold'>Privacy Policy :</h2>
                    <ul className='ml-10'>
                        <li>Reference your website's privacy policy and explain how user data is collected, stored, and used. You can use a picture that represents privacy, such as a lock or a shield, to emphasize the importance of protecting user information.
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-xl font-semibold'>Disclaimers and Limitations of Liability :</h2>
                    <ul className='ml-10'>
                        <li>Clearly state any disclaimers related to the accuracy, completeness, or usefulness of the information provided on your website. You can use a picture that represents disclaimers, such as an exclamation mark or an information icon.</li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-xl font-semibold'>Termination :</h2>
                    <ul className='ml-10'>
                        <li>Outline the conditions under which you may terminate or suspend user accounts or access to your website. You can include a picture that symbolizes account termination, such as a crossed-out user profile or a deactivated account.</li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-xl font-semibold'>Governing Law and Jurisdiction :</h2>
                    <ul className='ml-10'>
                        <li>
                            Specify the governing law and jurisdiction that apply to the Terms. You can use a picture that represents the legal system, such as a gavel or a courthouse, to symbolize the applicable law and jurisdiction.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
